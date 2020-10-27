import React from "react";
import NoProductComponent from "./component/NoProductComponent";
import ProductFeedComponent from "./component/ProductFeedComponent";

export const goodsCondition = [
  { titleCondition: "Neuf avec étiquette", isSelected: true },
  { titleCondition: "Neuf", isSelected: false },
  { titleCondition: "Très bon état", isSelected: false },
  { titleCondition: "Bon état", isSelected: false },
  { titleCondition: "Passable", isSelected: false },
];
export const distance = [
  { km: "5km", isSelected: false },
  { km: "10km", isSelected: true },
  { km: "15km", isSelected: false },
  { km: "20km", isSelected: false },
  { km: "25km", isSelected: false },
];

export const goodCategories = [
  { titleCategory: "Animaux", isValue: 0, followByUser: true },
  { titleCategory: "Beauté & bien être", isValue: 1, followByUser: false },
  { titleCategory: "Décoration", isValue: 2, followByUser: false },
  { titleCategory: "Entretien", isValue: 3, followByUser: false },
  { titleCategory: "Fêtes & évènements", isValue: 4, followByUser: false },
  {
    titleCategory: "High tech & fournitures de bureau",
    isValue: 5,
    followByUser: false,
  },
  { titleCategory: "Matériel de jardin", isValue: 6, followByUser: false },
  { titleCategory: "Matériel de sport", isValue: 7, followByUser: false },
  { titleCategory: "Meubles", isValue: 8, followByUser: false },
  { titleCategory: "Mode & accessoires", isValue: 9, followByUser: false },
  { titleCategory: "Outillage et travaux", isValue: 10, followByUser: false },
  { titleCategory: "Pièces auto/moto", isValue: 11, followByUser: false },
];

export const serviceCategories = [
  { titleCategory: "Mode/beauté", isValue: 0, followByUser: false },
  { titleCategory: "Cours & formations", isValue: 1, followByUser: false },
  { titleCategory: "Bricolage & travaux", isValue: 2, followByUser: false },
  {
    titleCategory: "Déménagement & manutention",
    isValue: 3,
    followByUser: false,
  },
  {
    titleCategory: "Dépannage & réparation de matériel",
    isValue: 4,
    followByUser: false,
  },
  {
    titleCategory: "Entretien & réparation auto/moto",
    isValue: 5,
    followByUser: false,
  },
  { titleCategory: "Garde d’enfants", isValue: 6, followByUser: false },
  {
    titleCategory: "Garde/promenade d’animaux",
    isValue: 7,
    followByUser: false,
  },
  { titleCategory: "Jardinage & piscine", isValue: 7, followByUser: false },
  { titleCategory: "Ménage à domicile", isValue: 9, followByUser: false },
  {
    titleCategory: "Restauration & réception",
    isValue: 10,
    followByUser: false,
  },
  { titleCategory: "Services à la personne", isValue: 11, followByUser: false },
  { titleCategory: "Santé & bien être", isValue: 12, followByUser: false },
];

export const profileOptions = [
  { title: "Voir mon profil", onClick: "EditProfile" },
  { title: "Mes favoris", onClick: "Favorite" },
  { title: "Personnalisation", onClick: "GoodOrService" },
  { title: "Mode association", onClick: "OrganizationMode" },
  { title: "Paramètres", onClick: "SettingDetail" },
  { title: "A propos de Trokéo", onClick: "About" },
  { title: "Conditions d'utilisation", onClick: "Terms" },
  { title: "Evaluer l'application", onClick: "SettingDetail" },
  { title: "Centre d'aide", onClick: "HelpCenter" },
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
