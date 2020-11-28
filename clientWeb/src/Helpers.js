import React from "react";
// ICON GOODS
import { ReactComponent as AnimauxIcon } from "./asset/iconGoods/animaux.svg";
import { ReactComponent as BeauteBienetreIcon } from "./asset/iconGoods/beauteBienetre.svg";
import { ReactComponent as DecorationIcon } from "./asset/iconGoods/decoration.svg";
import { ReactComponent as EntretientIcon } from "./asset/iconGoods/entretient.svg";
import { ReactComponent as FeteEvenementIcon } from "./asset/iconGoods/feteEvenement.svg";
import { ReactComponent as HightechIcon } from "./asset/iconGoods/hightech.svg";
import { ReactComponent as LoisirIcon } from "./asset/iconGoods/loisir.svg";
import { ReactComponent as MaterielJardinIcon } from "./asset/iconGoods/materielJardin.svg";
import { ReactComponent as MaterielSportIcon } from "./asset/iconGoods/materielSport.svg";
import { ReactComponent as MeubleIcon } from "./asset/iconGoods/meuble.svg";
import { ReactComponent as ModeAccessoireIcon } from "./asset/iconGoods/modeAccessoires.svg";

// ICON SERVICE
import { ReactComponent as BricolageTravauxIcon } from "./asset/iconServices/bricolageTravaux.svg";
import { ReactComponent as CoursFormationIcon } from "./asset/iconServices/coursFormation.svg";
import { ReactComponent as DemenagementManutentionIcon } from "./asset/iconServices/demenagmenetManutention.svg";
import { ReactComponent as DepannageReparationIcon } from "./asset/iconServices/depannageReparation.svg";
import { ReactComponent as GardePromenadeIcon } from "./asset/iconServices/gardePromenade.svg";
import { ReactComponent as JardinagePiscineIcon } from "./asset/iconServices/jardinagePiscine.svg";
import { ReactComponent as MenageIcon } from "./asset/iconServices/menage.svg";
import { ReactComponent as ModeBeauteIcon } from "./asset/iconServices/modeBeaute.svg";
import { ReactComponent as RestaurationReceptionIcon } from "./asset/iconServices/restaurationReception.svg";
import { ReactComponent as SanteIcon } from "./asset/iconServices/sante.svg";
import { ReactComponent as ServicePersonneIcon } from "./asset/iconServices/servicePersonne.svg";

//OPTION PROFILE
import { ReactComponent as About } from "./asset/iconProfile/about.svg";
import { ReactComponent as Custom } from "./asset/iconProfile/custom.svg";
import { ReactComponent as Custom2 } from "./asset/iconProfile/custom2.svg";
import { ReactComponent as Great } from "./asset/iconProfile/great.svg";
import { ReactComponent as Hands } from "./asset/iconProfile/hands.svg";
import { ReactComponent as Heart } from "./asset/iconProfile/heart.svg";
import { ReactComponent as Pencil } from "./asset/iconProfile/pencil.svg";
import { ReactComponent as Question } from "./asset/iconProfile/question.svg";
import { ReactComponent as Setting } from "./asset/iconProfile/setting.svg";

import Shave from "./asset/allSvg/shave.jpg";

export const goodCategories = [
  { titleCategory: "Animaux", isValue: 0, followByUser: false },
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

export const allIcon = [
  { title: "Animaux", icon: <AnimauxIcon /> },
  { title: "Beauté & bien être", icon: BeauteBienetreIcon },
  { title: "Décoration", icon: DecorationIcon },
  { title: "Entretien", icon: EntretientIcon },
  { title: "Fêtes & évènements", icon: FeteEvenementIcon },
  { title: "High tech & fournitures de bureau", icon: HightechIcon },
  { title: "ferf", icon: LoisirIcon },
  { title: "Matériel de jardin", icon: MaterielJardinIcon },
  { title: "Matériel de sport", icon: MaterielSportIcon },
  { title: "Meubles", icon: MeubleIcon },
  { title: "Mode & accessoires", icon: ModeAccessoireIcon },
  { title: "Outillage et travaux", icon: BricolageTravauxIcon },
  { title: "frefr", icon: CoursFormationIcon },
  { title: "Déménagement & manutention", icon: DemenagementManutentionIcon },
  {
    title: "Dépannage & réparation de matériel",
    icon: DepannageReparationIcon,
  },
  { title: "Garde/promenade d’animaux", icon: GardePromenadeIcon },
  { title: "Jardinage & piscine", icon: JardinagePiscineIcon },
  { title: "Ménage à domicile", icon: MenageIcon },
  { title: "Mode/beauté", icon: ModeBeauteIcon },
  { title: "Restauration & réception", icon: RestaurationReceptionIcon },
  { title: "Santé & bien être", icon: SanteIcon },
  { title: "Services à la personne", icon: ServicePersonneIcon },
];

export const allMessage = [
  {
    _id: 1,
    pictureProduct: Shave,
    userName: "walid",
    titleProduct: "shave",
    category: "Animaux",
  },
  {
    _id: 2,
    pictureProduct: Shave,
    userName: "walid",
    titleProduct: "shave",
    category: "Animaux",
  },
  {
    _id: 3,
    // pictureProduct: Shave,
    userName: "walid",
    titleProduct: "shave",
    category: "Animaux",
  },
  {
    _id: 4,
    pictureProduct: Shave,
    userName: "walid",
    titleProduct: "shave",
    category: "Animaux",
  },
];

export const allOptionsProfile = [
  { title: "Voir mon profil", icon: <Pencil /> },
  { title: "Favoris", icon: <Heart /> },
  { title: "Mode association", icon: <Hands /> },
  { title: "Personnalisation", icon: <Custom /> },
  { title: "Paramètres", icon: <Setting /> },
  { title: "A propos de Trokéo", icon: <About /> },
  { title: "Conditions d’utilisation", icon: <Custom2 /> },
  { title: "Evaluer l’application", icon: <Great /> },
  { title: "Centre d’aide", icon: <Question /> },
];
