import { KeyboardTypeOptions } from "react-native";

export interface IForms{
    username?: string;
    email?: string;
    password?: any;
    confirmPassword?: string;
}

export interface CustomButtonProps {
    title?: string
    hadlePress?: () => void
    containerStyle?: string
    textStyles?: string
    isLoading?: boolean
}

export interface IFormField {
    title?: string
    value?: string
    handleChangeText?: (e: string) => void
    otherStyles?: string
    keyboardType?: KeyboardTypeOptions
    placeholder?: string
}

export interface IVideo {
    collectionId?: string;
    createdAt?: string;
    databaseId?: string;
    id: string;
    permissions?: any[]; 
    updatedAt?: string;
    creator?: Creator | null;
    prompt?: string;
    thumbnail?: string;
    title?: string;
    video?: string;
}

export interface Creator {
    collectionId?: string;
    createdAt?: string;
    databaseId?: string;
    id?: string;
    permissions?: any[]; 
    updatedAt?: string;
    accountid?: string;
    avatar?: string;
    email?: string;
    username?: string;
}