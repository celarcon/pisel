import { useAuth } from "../context/authContext";
import React from 'react'

export function Home(){

    const {user} = useAuth();

    console.log(user);

    return <div>HOME 1</div>;
}