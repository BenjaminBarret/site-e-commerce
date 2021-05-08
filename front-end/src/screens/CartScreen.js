import React from "react";

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  return (
    <div>
      <h1>Ecran panier</h1>
      <p>
        AJOUTER AU PANIER : ID Produit: {productId} Quantité: {qty}
      </p>
    </div>
  );
}
