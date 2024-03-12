use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::{
    account_info::{next_account_info, AccountInfo},
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    program_error::ProgramError,
    pubkey::Pubkey,
};

#[derive(Debug, BorshSerialize, BorshDeserialize)]
pub struct NFT {
    pub name: String,
    pub description: String,
    pub image_url: String,
}
#[derive(Debug, BorshSerialize, BorshDeserialize)]
pub enum Instruction {
    CreateNFT {
        name: String,
        description: String,
        image_url: String,
    },
    TransferNFT {
        nft_id: Pubkey,
        new_owner: Pubkey,
    },
}

fn create_nft(
    accounts: &[AccountInfo],
    name: String,
    description: String,
    image_url: String,
) -> ProgramResult {

    let new_nft = NFT {
        name,
        description,
        image_url,
    };

    // serialize
    let serialized_nft = new_nft.try_to_vec().unwrap();

    // update account
    let accounts_iter = &mut accounts.iter();
    let nft_account = next_account_info(accounts_iter)?;

    nft_account.try_borrow_mut_data()?.copy_from_slice(&serialized_nft);

    Ok(())
}

fn transfer_nft(
    accounts: &[AccountInfo],
    nft_id: Pubkey,
    new_owner: Pubkey,
) -> ProgramResult {

    //update account
    let accounts_iter = &mut accounts.iter();
    let nft_account = next_account_info(accounts_iter)?;

    Ok(())
}

pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    let instruction_data_decoded: Instruction = Instruction::try_from_slice(instruction_data)
        .map_err(|_| ProgramError::InvalidInstructionData)?;

    match instruction_data_decoded {
        Instruction::CreateNFT { name, description, image_url } => {
            create_nft(accounts, name, description, image_url)?;
        }
        Instruction::TransferNFT { nft_id, new_owner } => {
            transfer_nft(accounts, nft_id, new_owner)?;
        }
    }

    Ok(())
}

entrypoint!(process_instruction);