"use client"

import Link from "next/link"
import Modal from "./Modal"
import { ChangeEventHandler, FormEventHandler, useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import LoginForm from "../auth/LoginForm";

interface ModalProps {
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ isOpen, setOpen } : ModalProps) => {
    return (
        <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
            <LoginForm setOpen={setOpen}/>
        </Modal>
    )
}
export default Login;