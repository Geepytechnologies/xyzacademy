import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"

export default function middleware(request){
    const {cookies} = request;

    const token = cookies.xyzacademy;


    /* if(!token){
        return NextResponse('No token found', {
            status: 401,
            headers: {
                'Content-Type': 'application/json'
            }
        });

    }
    try{
        const decoded = jwt.verify(token, process.env.SECRET);
        if(!decoded){
            return NextResponse('Invalid token', {
                status: 401,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
    }catch(err){
        console.error(err);
    } */
    if(token){
        return NextResponse.next();
    }else{
        const myUrl = new URL('/',request.url)
        return NextResponse.redirect(myUrl);
    } 
}

export const config = {
    matcher: ["/dashboard"]
}