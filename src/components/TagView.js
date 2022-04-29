import {View, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import KeywordView from './KeywordView';

export default function TagView(props) {
  const sele = props.selected ?? '';
  const keyword = props.keywords;
  const [keywordList, setKeywordList] = useState([]);
  const [selected, setSelected] = useState(props.selected);

  useEffect(() => {
    setKeywordList({keywordList: props.keywords});
  }, [props.keywords]);

  return <View style={styles.container}>{makeButtons(keyword)}</View>;
}

const makeButtons = keywords => {
  return keywords.map((obj, i) => {
    return (
      <KeywordView
        backgroundColor={'white'}
        textColor={'black'}
        textStyle={textStyle}
        borderColor={'white'}
        // onPress={() => props.onPress(obj.tag)}
        onPress={() => onPress(obj.tag)}
        key={i}
        title={obj.tag}
      />
    );
  });
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
  },
});
