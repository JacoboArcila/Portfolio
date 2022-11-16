import React from "react";
import "./FormStyles.scss";
import { Formik, validateYupSchema, Form } from "formik";
import TextFields from "./TextFields";
import * as Yup from "yup";
import { InputAdornment, TextField } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useForm, ValidationError } from "@formspree/react";
import Swal from "sweetalert2";

const FormContact = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email invalido").required("*Obligatorio*"),
    nombre: Yup.string().required("*Obligatorio*"),
    mensaje: Yup.string().required("*Obligatorio*"),
  });

  const [state, handleSubmit] = useForm("xbjbzbvw");
  /* if (state.succeeded) {
    return alert("Enviado");
  } */

  return (
    <div className="containerContact">
      {state.succeeded
        ? alert("Correo enviado con exito")
        : ""}
      {/* <h1 className="titleContact">Contáctame</h1> */}
      <div className="titleContact">
        <span>Contáctame</span>
      </div>
      <Formik
        initialValues={{
          nombre: "",
          email: "",
          mensaje: "",
        }}
        validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <div className="containerForm">
            <Form>
              <TextFields
                fullWidth
                label="Nombre"
                name="nombre"
                type="text"
                variant="outlined"
              />
              <TextFields
                fullWidth
                label="Email"
                name="email"
                variant="outlined"
                type="text"
                /* InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }} */
              />
              <TextFields
                id="filled-multiline-flexible"
                label="Mensaje"
                multiline
                fullWidth
                rows={4}
                variant="outlined"
                name="mensaje"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <button
                className="containerForm-button"
                type="submit"
                disabled={state.submitting}
              >
                Enviar
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default FormContact;
