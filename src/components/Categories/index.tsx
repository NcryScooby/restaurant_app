import { FlatList } from "react-native";
import { categories } from "../../mocks/categories";
import { Text } from "../Text";
import { Category, Icon } from "./style";

export const Categories = () => {
  return (
    <FlatList
      data={categories}
      keyExtractor={(category) => category._id}
      contentContainerStyle={{ paddingRight: 24 }}
      renderItem={({ item: category }) => (
        <Category>
          <Icon>
            <Text>{category.icon}</Text>
          </Icon>
          <Text size={14} weight={"600"}>
            {category.name}
          </Text>
        </Category>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};
