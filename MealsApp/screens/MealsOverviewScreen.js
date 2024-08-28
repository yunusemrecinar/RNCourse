import { useLayoutEffect } from 'react';
import { StyleSheet } from 'react-native';
// import { useRoute } from '@react-navigation/native'

import MealsList from '../components/MealList/MealsList';
import { CATEGORIES, MEALS } from '../data/dummy-data';

function MealsOverviewScreen({ route, navigation }) {
    // const route = useRoute(); route.params
    const catId = route.params.categoryId;  

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
     
        navigation.setOptions({
            title: categoryTitle
        });
    }, [catId, navigation]);

    return <MealsList items={displayedMeals} />
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});