import React, { Fragment } from "react";
import AvailableMeals from "./AvailibleMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary></MealsSummary>
      <AvailableMeals></AvailableMeals>
    </Fragment>
  );
};

export default Meals;
