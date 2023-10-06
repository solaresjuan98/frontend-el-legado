import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import ListAltIcon from '@mui/icons-material/ListAlt';

import Typography from "@mui/joy/Typography";
import { ModalResumenProps } from "../util/interfaces";
export default function ModalResumen({
  pago,
  onConfirm,
  openModal,
  setOpenModal,
}: ModalResumenProps) {
  const handleConfirm = (confirm: boolean) => {
    setOpenModal(false);
    onConfirm(confirm);
  };

  return (
    <React.Fragment>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <ModalDialog
          variant="outlined"
          role="alertdialog"
          aria-labelledby="alert-dialog-modal-title"
          aria-describedby="alert-dialog-modal-description"
        >
          <Typography
            id="alert-dialog-modal-title"
            level="h1"
            textColor={"#B5D534"} 
            startDecorator={<ListAltIcon />}
          >
            Resumen           </Typography>
          <Divider />
          {pago && (
            <>
              <br></br>
              <Typography fontSize="1.2rem">
                <Typography component="span" fontWeight="bold"  sx={{ color: "#B5D534" }} >
                  Nombree:{" "}
                </Typography>
                <Typography component="span">{pago.nombre}</Typography>
              </Typography>
              <Typography fontSize="1.2rem" >
                <Typography component="span" fontWeight="bold"  sx={{ color: "#B5D534" }}>
                  Teléfono:{" "}
                </Typography>
                <Typography component="span">{pago.telefono}</Typography>
              </Typography>
              <Typography fontSize="1.2rem">
                <Typography component="span" fontWeight="bold"  sx={{ color: "#B5D534" }}>
                  Correo:{" "}
                </Typography>
                <Typography component="span">{pago.correo}</Typography>
              </Typography>
              <Typography fontSize="1.2rem">
                <Typography component="span" fontWeight="bold"  sx={{ color: "#B5D534" }}>
                  Total a Pagar :{" "}
                </Typography>
                <Typography component="span">Q.{pago.transaccion.total_pagar}.00</Typography>
              </Typography>
              <Typography fontSize="1.2rem">
                <Typography component="span" fontWeight="bold"  sx={{ color: "#B5D534" }}>
                 Número de Entradas:{" "}
                </Typography>
                <Typography component="span"> {pago.transaccion.numero_entradas}</Typography>
              </Typography>
              {/* Añade aquí otros campos del objeto pago como se ha hecho arriba */}
            </>
          )}
          <Typography
            id="alert-dialog-modal-description"
            textColor="text.tertiary"
          >
            ¿La información ingresada es correcta?
          </Typography>
          <Box
            sx={{ display: "flex", gap: 1, justifyContent: "center", pt: 2 }}
          >
            <Button
              variant="plain"
              color="danger"
              onClick={() => handleConfirm(false)}
            >
              No
            </Button>
            <Button
              variant="solid"
              style={{
                color: "#FFFFFF",
                background: "#3E00B9",
              }}
              onClick={() => handleConfirm(true)}
            >
              Sí
            </Button>
          </Box>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
