import React, { useState, useEffect } from "react";
import { Carrousel } from "../components/Carrousel/Carrousel";
import { Menu } from "./Menu";
import { Programa } from "../components/Programa/Programa";
//import { Programa } from "../components/Programa/Programa"
import { Ubicacion } from "../components/Ubicacion/Ubicacion";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography"; // Asegúrate de tener este import si no lo tienes ya
import { NavLink } from "react-router-dom";
interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        return `${days} días ${hours} horas ${minutes} minutos`;
      }
      return "El evento es hoy!";
    };

    setTimeLeft(calculateTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000 * 60); // Actualizado para que se verifique cada minuto

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <Typography
      level="h2"
      textColor={"#B5D534"}
    >{`Faltan ${timeLeft} para el congreso LEGADO.`}</Typography>
  );
};

export const LandingPage = () => {
  return (
    <div>
      <Carrousel />
      <br />
      <div style={{ textAlign: "center" }}>
        {/* Agregamos el componente Countdown arriba del botón */}
        <Countdown targetDate={new Date("2024-11-02 09:00:00")} />{" "}
        {/* Ajustado para las 9 am */}
        <br />
        <NavLink to="/registro">
          <Button
            variant="plain"
            style={{
              color: "#C5FFFB",
              background: "#1A1142",
              fontSize: "25px",
              padding: "25px 50px",
              display: "inline-block",
            }}
          >
            Registrate
          </Button>
        </NavLink>
      </div>
      <br /> <br /> <br />
      <Menu />
      {/*  <Programa/>*/}
      <br /> <br /> <br />
      <Programa/>
      <br /> <br /> <br />
      <Ubicacion />
    </div>
  );
};
