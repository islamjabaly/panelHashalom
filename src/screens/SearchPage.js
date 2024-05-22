// SearchPage.js
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import materials from '../res/data';
import SearchResult from '../compoenents/ResultSearch'; // Changed import name to match the component name

const { width, height } = Dimensions.get('window');

const SearchPage = () => {
    const [searchText, setSearchText] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const navigation = useNavigation();
    const route = useRoute();

    const fetchData = () => {
        const results = materials.flatMap(category =>
            category.data.filter(item =>
                item.name.includes(searchText) ||
                item.price.includes(searchText)
            )
        );
        setSearchResults(results);
    };

    const handleSearch = () => {
        setSelectedItem(null);
        fetchData();
    };

    const handleItemPress = (item) => {
        setSelectedItem(item);
    };

    useEffect(() => {
        const { params } = route;
        if (params && params.searchText) {
            setSearchText(params.searchText);
        }
        fetchData();
    }, [searchText, route]);

    const renderSearchResults = () => {
        return searchResults.map(item => (
            <TouchableOpacity key={item.name} style={styles.searchResultItem} onPress={() => handleItemPress(item)}>
                <Text style={styles.searchResultText}>{item.name}</Text>
            </TouchableOpacity>
        ))
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.container}>
                <Text style={styles.title}>חיפוש</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="הקלד טקסט לחיפוש"
                        value={searchText}
                        onChangeText={text => setSearchText(text)}
                    />
                    <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                        <Text style={styles.searchButtonText}>חפש</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.searchResultsContainer}>
                    <Text style={styles.searchText}>תוצאות חיפוש:</Text>
                    <View style={styles.searchResults}>
                        {renderSearchResults()}
                    </View>
                    {selectedItem && <SearchResult selectedItem={selectedItem} />}
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
    },
    container: {
        backgroundColor: '#fff',
        padding: width * 0.05,
    },
    title: {
        fontSize: width * 0.06,
        fontWeight: 'bold',
        marginBottom: height * 0.02,
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: height * 0.03,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: width * 0.03,
        marginRight: width * 0.03,
        fontSize: width * 0.04,
    },
    searchButton: {
        backgroundColor: '#2a9d8f',
        borderRadius: 5,
        padding: width * 0.03,
    },
    searchButtonText: {
        color: '#fff',
        fontSize: width * 0.04,
        fontWeight: 'bold',
    },
    searchText: {
        fontSize: width * 0.05,
        fontWeight: 'bold',
        marginBottom: height * 0.02,
    },
    searchResultsContainer: {
        flex: 1,
    },
    searchResults: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    searchResultItem: {
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        padding: width * 0.03,
        margin: width * 0.02,
    },
    searchResultText: {
        fontSize: width * 0.04,
        color: '#333',
    },
});

export default SearchPage;