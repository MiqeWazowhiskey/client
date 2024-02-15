import {MintFormProps} from "../utils/types.ts";
import {useForm} from "react-hook-form";
import {useRef, useState} from "react";
import {MdCloudUpload} from "react-icons/md";

export const MintForm = () => {
  const [isUploaded, setIsUploaded] = useState(false)
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<MintFormProps>()

  const imageRef = useRef<HTMLInputElement>(null)
  const onImageUpload = () => {
    if (imageRef.current) {
      imageRef.current.click()
    }
  }
  const uploadImage = () => {
    try {
      setIsUploaded(true)
    } catch (error) {
      setIsUploaded(false)
      alert("Something went wrong")
    }
  }

  const onSubmit = (data: MintFormProps) => console.log(data)

  return (
    <form
      className="flex flex-col text-white gap-3 w-full lg:w-[500px] md:w-[400px] transition-all px-4 py-4 bg-black bg-opacity-20 rounded-lg items-center"
      onSubmit={handleSubmit(onSubmit)}>
      <label className="flex flex-row  gap-2 w-full"
             htmlFor="name">
        Name
        <p className="text-red-500">*</p>
        {errors.name && errors.name.type === "required" && (
          <span
            className="w-full text-end text-red-600 text-opacity-80">Required</span>
        )}
      </label>
      <input
        className="bg-inherit py-2 px-4 w-full" {...register("name", {required: true})} />
      <label className="flex flex-row  gap-2 w-full"
             htmlFor="symbol">
        Symbol
        <p
          className="text-red-500">*</p>
        {errors.name && errors.name.type === "required" && (
          <span
            className="w-full text-end text-red-600 text-opacity-80">Required</span>
        )}
      </label>
      <input
        className="bg-inherit py-2 px-4 w-full" {...register("symbol", {required: true})} />
      <label className="flex flex-row  gap-2 w-full"
             htmlFor="fee">
        Fee
        <p
          className="text-red-500">*</p>
        {errors.name && errors.name.type === "required" && (
          <span
            className="w-full text-end text-red-600 text-opacity-80">Required</span>
        )}
      </label>
      <input
        className="bg-inherit py-2 px-4 w-full" {...register("fee", {required: true})} />
      <label className="flex flex-row  gap-2 w-full"
             htmlFor="description">
        Description
        <p
          className="text-red-500">*</p>
        {errors.name && errors.name.type === "required" && (
          <span
            className="w-full text-end text-red-600 text-opacity-80">Required</span>
        )}</label>
      <input
        className="bg-inherit py-2 px-4 w-full" {...register("description", {required: true})} />
      <label className="flex flex-row  gap-2 w-full"
             htmlFor="image">Image</label>
      <input accept=".png,.jpg,.jpeg" type="file"
             ref={imageRef} className="hidden"
             onChange={() => uploadImage}/>
      <button type="button" onClick={() => onImageUpload()}
              className="bg-transparent border-dashed border-white border rounded-md flex items-center justify-center py-2 w-full h-12 mt-2">
        <MdCloudUpload size={32}/>
      </button>
      {isUploaded &&
          <p className="text-sm font-thin">Image Uploaded
              (Upload again to change)</p>}
      <button type="submit"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 py-2 w-36 mt-2 rounded-md">Create
      </button>
    </form>
  )
}