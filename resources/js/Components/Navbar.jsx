import React, { useEffect } from "react";
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useState } from "react";
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Checkbox from "./Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({props, canResetPassword}) {
    const [navbar, setNavbar] = useState(false);
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 80){
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    const changeLogin = () => {
        if(login) {
            setLogin(false);
        } else {
            setLogin(true);
        }
    }

    return (
        <>
        <div className={navbar ? 'navbar bg-base-100 fixed z-30 shadow' : 'navbar text-white bg-transparent fixed z-30'}>
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Beranda</a></li>
                    {/* <li tabIndex={0}>
                    <a className="justify-between">
                        Parent
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                    </a>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                    </li> */}
                    <li><a>Produk</a></li>
                    <li><a>Kontak</a></li>
                    <li><a>Bantuan</a></li>
                </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Nasywa Snack</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><a>Beranda</a></li>
                    {/* <li tabIndex={0}>
                        <a>
                        Parent
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                        </ul>
                    </li> */}
                    <li><a>Produk</a></li>
                    <li><a>Kontak</a></li>
                    <li><a>Bantuan</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a onClick={changeLogin} className="btn btn-ghost flex items-center space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                    </svg>
                    <span>
                        Masuk
                    </span>
                </a>
            </div>
        </div>
        <div className={login ? "fixed z-30 bg-base-100 w-1/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-4" : "hidden"}>
            <div className="tabs tabs-boxed w-full">
                <a className="tab w-1/2">Daftar</a> 
                <a className="tab w-1/2 tab-active">Masuk</a> 
            </div>
            <div>
                
            </div>
        </div>
        </>
    )
}