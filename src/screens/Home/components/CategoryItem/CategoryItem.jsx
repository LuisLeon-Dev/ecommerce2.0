import { Pressable, Text } from "react-native";

import { Card } from "../../../../components";
import styles from "./CategoryItem.style";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../../../../features/shop/shopSlice";

const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch();
  return (
    <Pressable
      onPress={() => {
        dispatch(setCategorySelected(category));
        navigation.navigate("Products", { category });
      }}
    >
      <Card style={styles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
      </Card>
    </Pressable>
  );
};

export default CategoryItem;
