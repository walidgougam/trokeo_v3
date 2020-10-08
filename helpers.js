import React from "react";
import NoProductComponent from "./component/NoProductComponent";
import ProductFeedComponent from "./component/ProductFeedComponent";

export const goodsCondition = [
  "Neuf avec étiquette",
  "Neuf",
  "Très bon état",
  "Bon état",
  "Passable",
];

export const goodCategories = [
  { title: "Animaux", isValue: 0, followByUser: true },
  { title: "Beauté & bien être", isValue: 1, followByUser: true },
  { title: "Décoration", isValue: 2, followByUser: false },
  { title: "Entretien", isValue: 3, followByUser: false },
  { title: "Fêtes & évènements", isValue: 4, followByUser: false },
  {
    title: "High tech & fournitures de bureau",
    isValue: 5,
    followByUser: false,
  },
  { title: "Matériel de jardin", isValue: 6, followByUser: false },
  { title: "Matériel de sport", isValue: 7, followByUser: false },
  { title: "Meubles", isValue: 8, followByUser: false },
  { title: "Mode & accessoires", isValue: 9, followByUser: false },
  { title: "Outillage et travaux", isValue: 10, followByUser: false },
  { title: "Pièces auto/moto", isValue: 11, followByUser: false },
];

export const serviceCategories = [
  { title: "Mode/beauté", isValue: 0, followByUser: false },
  { title: "Cours & formations", isValue: 1, followByUser: false },
  { title: "Bricolage & travaux", isValue: 2, followByUser: false },
  { title: "Déménagement & manutention", isValue: 3, followByUser: false },
  {
    title: "Dépannage & réparation de matériel",
    isValue: 4,
    followByUser: false,
  },
  {
    title: "Entretien & réparation auto/moto",
    isValue: 5,
    followByUser: false,
  },
  { title: "Garde d’enfants", isValue: 6, followByUser: false },
  { title: "Garde/promenade d’animaux", isValue: 7, followByUser: false },
  { title: "Jardinage & piscine", isValue: 7, followByUser: false },
  { title: "Ménage à domicile", isValue: 9, followByUser: false },
  { title: "Restauration & réception", isValue: 10, followByUser: false },
  { title: "Services à la personne", isValue: 11, followByUser: false },
  { title: "Santé & bien être", isValue: 12, followByUser: false },
];

export const profileOptions = [
  { title: "Voir mon profil", onClick: "EditProfile" },
  { title: "Mes favoris", onClick: "SettingDetail" },
  { title: "Personnalisation", onClick: "GoodOrService" },
  { title: "Mode association", onClick: "SettingDetail" },
  { title: "Paramètres", onClick: "SettingDetail" },
  { title: "A propos de Trokéo", onClick: "About" },
  { title: "Conditions d'utilisation", onClick: "SettingDetail" },
  { title: "Evaluer l'application", onClick: "SettingDetail" },
  { title: "Centre d'aide", onClick: "SettingDetail" },
];

export const settingOptions = [
  { title: "Notifications", onClick: "notification" },
  { title: "Données personnelles", onClick: "SettingDetail" },
  { title: "Mot de passe", onClick: "SettingDetail" },
  { title: "Paiements", onClick: "paymentVisibility" },
  { title: "Déconnection", onClick: "disconnected" },
];

export const renderForOrganization = (goodTabs, productFromApi, navigation) => {
  const serviceProduct = productFromApi?.filter(
    (e) => e.isServices === true && e.isFromOrganization === true
  );
  const goodProduct = productFromApi?.filter(
    (e) => e.isGoods === true && e.isFromOrganization === true
  );
  //pas de services dans longlet service
  if (!goodTabs && serviceProduct?.length === 0) {
    return <NoProductComponent />;
  }
  //pas de bien dans longlet bien
  else if (goodTabs && goodProduct?.length === 0) {
    return <NoProductComponent />;
  }
  // service dans l'onglet service
  else if (!goodTabs && serviceProduct?.length > 0) {
    return (
      <ProductFeedComponent navigation={navigation} data={serviceProduct} />
    );
  }
  // bien dans l'onglet bien
  else if (goodTabs && goodProduct?.length > 0) {
    return <ProductFeedComponent navigation={navigation} data={goodProduct} />;
  }
};

export const renderForHome = (goodTabs, productFromApi, navigation) => {
  const serviceProduct = productFromApi?.filter(
    (e) => e.isServices === true && e.isFromOrganization === false
  );
  const goodProduct = productFromApi?.filter(
    (e) => e.isGoods === true && e.isFromOrganization === false
  );
  //pas de services dans longlet service
  if (!goodTabs && serviceProduct?.length === 0) {
    return <NoProductComponent />;
  }
  //pas de bien dans longlet bien
  else if (goodTabs && goodProduct?.length === 0) {
    return <NoProductComponent />;
  }
  // service dans l'onglet service
  else if (!goodTabs && serviceProduct?.length > 0) {
    return (
      <ProductFeedComponent navigation={navigation} data={serviceProduct} />
    );
  }
  // bien dans l'onglet bien
  else if (goodTabs && goodProduct?.length > 0) {
    return <ProductFeedComponent navigation={navigation} data={goodProduct} />;
  }
};
