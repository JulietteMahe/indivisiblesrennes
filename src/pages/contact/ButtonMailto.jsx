import React from "react";
import "./ButtonMailto.css";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <div  type="button" class="btn btn-light">
        <a
            className="mailtoLink"
            href='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </a>
        </div>
    );
};

export default ButtonMailto;