import React from "react";
import { View, Text, StyleSheet } from "react-native";
import normalize from "react-native-normalize";
import {
  AnimauxIcon,
  BeauteBienetreIcon,
  DecorationIcon,
  EntretientIcon,
  FeteEvenementIcon,
  HightechIcon,
  LoisirIcon,
  MaterielJardinIcon,
  MaterielSportIcon,
  MeubleIcon,
  ModeAccessoireIcon,
} from "../../assets/icon/goods/IconGoods";

import {
  BricolageTravauxIcon,
  CoursFormationIcon,
  DemenagementManutentionIcon,
  DepannageReparationIcon,
  GardePromenadeIcon,
  JardinagePiscineIcon,
  MenageIcon,
  ModeBeauteIcon,
  RestaurationReceptionIcon,
  SanteIcon,
  ServicePersonneIcon,
} from "../../assets/icon/services/IconServices";

export default function NoImageByCategory({
  icon,
  width,
  height,
  fromCardProduct,
  widthIcon,
  heightIcon,
}) {
  const allIcon = [
    {
      title: "Animaux",
      icon: <AnimauxIcon width={widthIcon} height={heightIcon} />,
    },
    {
      title: "Beauté & bien être",
      icon: <BeauteBienetreIcon width={widthIcon} height={heightIcon} />,
    },
    {
      title: "Décoration",
      icon: <DecorationIcon width={widthIcon} height={heightIcon} />,
    },
    {
      title: "Entretien",
      icon: <EntretientIcon width={widthIcon} height={heightIcon} />,
    },
    {
      title: "Fêtes & évènements",
      icon: <FeteEvenementIcon width={widthIcon} height={heightIcon} />,
    },
    {
      title: "High tech & fornitures de bureau",
      icon: <HightechIcon width={widthIcon} height={heightIcon} />,
    },
    {
      title: "ferf",
      icon: <LoisirIcon width={widthIcon} height={heightIcon} />,
    },
    {
      title: "Matériel de jardin",
      icon: <MaterielJardinIcon width={widthIcon} height={heightIcon} />,
    },
    {
      title: "Matériel de sport",
      icon: <MaterielSportIcon width={widthIcon} height={heightIcon} />,
    },
    {
      title: "Meubles",
      icon: <MeubleIcon width={widthIcon} height={heightIcon} />,
    },
    {
      title: "Mode & accessoires",
      icon: <ModeAccessoireIcon width={widthIcon} height={heightIcon} />,
    },
    {
      title: "Outillage et travaux",
      icon: <BricolageTravauxIcon width={widthIcon} height={heightIcon} />,
    },
    {
      title: "frefr",
      icon: <CoursFormationIcon width={widthIcon} height={heightIcon} />,
    },
    {
      title: "Déménagement & manutention",
      icon: (
        <DemenagementManutentionIcon width={widthIcon} height={heightIcon} />
      ),
    },
    {
      title: "Dépannage & réparation de matériel",
      icon: <DepannageReparationIcon width={widthIcon} height={heightIcon} />,
    },
    {
      title: "Garde/promenade d’animaux",
      icon: <GardePromenadeIcon width={widthIcon} height={heightIcon} />,
    },
    {
      title: "Jardinage & piscine",
      icon: <JardinagePiscineIcon width={widthIcon} height={heightIcon} />,
    },
    {
      title: "Ménage à domicile",
      icon: <MenageIcon width={widthIcon} height={heightIcon} />,
    },
    {
      title: "Mode/beauté",
      icon: <ModeBeauteIcon width={widthIcon} height={heightIcon} />,
    },
    {
      title: "Restauration & réception",
      icon: <RestaurationReceptionIcon width={widthIcon} height={heightIcon} />,
    },
    {
      title: "Santé & bien être",
      icon: <SanteIcon width={widthIcon} height={heightIcon} />,
    },
    {
      title: "Services à la personne",
      icon: <ServicePersonneIcon width={widthIcon} height={heightIcon} />,
    },
  ];
  const renderIcon = () => {
    for (let i = 0; i < allIcon.length; i++) {
      if (allIcon[i].title === icon) {
        return allIcon[i]?.icon;
      }
    }
  };
  return (
    <View style={[styles.container, { width, height }]}>{renderIcon()}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C1C1C1",
    borderRadius: normalize(5),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
