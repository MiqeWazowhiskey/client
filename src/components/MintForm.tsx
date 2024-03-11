import {MintFormProps} from "../utils/types.ts";
import {useForm} from "react-hook-form";
import {useRef, useState} from "react";
import {MdCloudUpload} from "react-icons/md";
import {
  ref,
  uploadBytes,
  getDownloadURL
} from "firebase/storage";
import {v4 as uuidv4} from 'uuid';
import {collection, addDoc} from "firebase/firestore";
import {storage, db} from "../../firebase.config.js";
import {createNft} from "../services/nftService.ts";
import {useWeb3React} from "@web3-react/core";

export const MintForm = () => {
  const {connector, hooks} = useWeb3React();
  const {useSelectedAccount} = hooks;
  const account = useSelectedAccount(connector);
  const [downloadUrl, setDownloadUrl] = useState<string>("")
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

  const uploadImage = (file: File) => {
    try {
      const id = uuidv4();
      const storageRef = ref(storage, 'images/' + id);
      uploadBytes(storageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          setDownloadUrl(downloadURL)
        });
      });
      setIsUploaded(true);

    } catch (error) {
      setIsUploaded(false)
      alert("Something went wrong")
    }
  }

  const postFirestore = async (data: MintFormProps) => {
    await addDoc(collection(db, "nfts"), {
      name: data.name,
      symbol: data.symbol,
      amount: data.fee,
      description: data.description,
      image: downloadUrl
    });
  }
  const onSubmit = (data: MintFormProps) => {
      if (account) {
        createNft(
          data.name,
          account,
          data.description,
          downloadUrl,
          +data.fee,
          data.symbol
        )
          .then(() => postFirestore(data)).catch((error) => {
          console.log(error)
        });
      } else {
        alert("Connect Wallet")
      }
  }

  return (
    <form
      className="flex flex-col text-white gap-3 w-full lg:w-[500px] md:w-[400px] transition-all px-4 py-4 bg-black bg-opacity-20 rounded-lg items-center"
      onSubmit={handleSubmit(()=>onSubmit)}>
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
             onChange={(e) => e.target.files && e.target.files[0] && uploadImage(e.target.files[0])}/>
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