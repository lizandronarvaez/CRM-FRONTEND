import React from "react";
import { Dashboard, Navegacion } from "../Pages";
import { Navigate, Route, Routes } from "react-router-dom";
import { ClientsAll, ClientUpdate, ClientCreate } from "../clients";
import { ProductCreate, ProductsAll, ProductsUpdate } from "../productos";
import { OrderCreate, OrderPDF, OrderAll } from "../orders";

export const CrmRoutePrivate = () => {
    return (
        <>
            <div className="contenido-principal">
                <Navegacion />
                <Routes>
                    <Route exact path="/dashboard" element={<Dashboard />} />
                    <Route exact path="/clientes" element={<ClientsAll />} />
                    <Route exact path='/clientes/nuevo-cliente' element={<ClientCreate />} />
                    <Route exact path='/clientes/editar/:_id' element={<ClientUpdate />} />

                    <Route exact path="/productos" element={<ProductsAll />} />
                    <Route exact path="/productos/nuevo-producto" element={<ProductCreate />} />
                    <Route exact path="/productos/editar-producto/:_id" element={<ProductsUpdate />} />

                    <Route exact path="/pedidos/clientes" element={<OrderAll />} />
                    <Route exact path="/pedidos/nuevo/:_id" element={<OrderCreate />} />
                    <Route exact path="/pedidos/pdf/:_idPedido" element={<OrderPDF />} />

                    <Route path="/*" element={<Navigate to={"/dashboard"} />} />
                </Routes>
            </div>
        </>
    );
};
