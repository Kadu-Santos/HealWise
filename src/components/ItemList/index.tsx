import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from "./styles";

type ItemListProps = {
    active: boolean;
    label: string;
  };
  
  export function ItemList({ active, label }: ItemListProps) {
    const cor = active ? 'rgba(0, 0, 0, 0.3)' : undefined;
  
    return (
      <TouchableOpacity style={{ backgroundColor: cor, padding: 2, borderRadius: 5}}>
        <Text style={styles.itemText}>{label}</Text>
      </TouchableOpacity>
    );
}