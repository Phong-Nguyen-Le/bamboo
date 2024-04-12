import { FlatList, View } from "react-native";
import LikeWorkerItem from "./LikeWorkerItem";

const exampleData = [
  {
    worker: {
      name: "Worker",
      id: "0",
      major: "kỹ sư",
      avatar: "https://i.pravatar.cc/100",
    },
    KPI: 45,
    star: 4,
  },
  {
    worker: {
      name: "Worker",
      id: "1",
      major: "kỹ sư",
      avatar: "https://i.pravatar.cc/101",
    },
    KPI: 55,
    star: 5,
  },
  {
    worker: {
      name: "Worker",
      id: "2",
      major: "kỹ sư",
      avatar: "https://i.pravatar.cc/102",
    },
    KPI: 60,
    star: 4,
  },
  {
    worker: {
      name: "Worker",
      id: "3",
      major: "kỹ sư",
      avatar: "https://i.pravatar.cc/103",
    },
    KPI: 40,
    star: 3,
  },
  {
    worker: {
      name: "Worker",
      id: "4",
      major: "kỹ sư",
      avatar: "https://i.pravatar.cc/104",
    },
    KPI: 75,
    star: 5,
  },
  {
    worker: {
      name: "Worker",
      id: "5",
      major: "kỹ sư",
      avatar: "https://i.pravatar.cc/105",
    },
    KPI: 65,
    star: 4,
  },
  {
    worker: {
      name: "Worker",
      id: "6",
      major: "kỹ sư",
      avatar: "https://i.pravatar.cc/106",
    },
    KPI: 80,
    star: 5,
  },
  {
    worker: {
      name: "Worker",
      id: "7",
      major: "kỹ sư",
      avatar: "https://i.pravatar.cc/107",
    },
    KPI: 50,
    star: 4,
  },
  {
    worker: {
      name: "Worker",
      id: "8",
      major: "kỹ sư",
      avatar: "https://i.pravatar.cc/108",
    },
    KPI: 70,
    star: 5,
  },
  {
    worker: {
      name: "Worker",
      id: "10",
      major: "kỹ sư",
      avatar: "https://i.pravatar.cc/109",
    },
    KPI: 55,
    star: 4,
  },
];
export type LikeWorkerItemType = (typeof exampleData)[0];
function LikeWorkerScreen() {
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={exampleData}
        renderItem={({ item }) => <LikeWorkerItem data={item} />}
        keyExtractor={(item) => item.worker.id}
      />
    </View>
  );
}

export default LikeWorkerScreen;
