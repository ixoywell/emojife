import React from "react";
import { useParams } from 'react-router-dom';

export default function OtherProfile() {
    // render() {
        let { id } = useParams();
        console.log('id', id)

        return (
            <div className="login">
                <h3>OtherProfile</h3>
                <div>ID: {id}</div>
            </div>
        )
    // }
}