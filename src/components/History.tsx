import React, { useRef } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import HistoryItem, { HistoryItemProps } from '~/components/HistoryItem';

type HistoryProps = {
  items: Array<HistoryItemProps>;
};

type HistoryListRef = FlatList<HistoryItemProps> | null;

const keyExtractor = (_: HistoryItemProps, index: number): string => {
  return String(index);
};

const History = ({ items }: HistoryProps) => {
  const $list = useRef<HistoryListRef>(null);

  const scrollToBottom = () => {
    $list.current?.scrollToEnd({ animated: true });
  };

  return (
    <View style={s.root}>
      <View style={s.spacer} />

      <View>
        <FlatList
          ref={$list}
          style={s.list}
          data={items}
          keyExtractor={keyExtractor}
          renderItem={({ item }) => <HistoryItem {...item} />}
          onContentSizeChange={scrollToBottom}
        />
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  spacer: {
    flex: 1,
  },
  list: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default History;
