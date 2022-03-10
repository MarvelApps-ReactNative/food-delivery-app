import React from 'react';
import {
  View,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import {COLORS, constants, dummyData, icons, SIZES} from '../../constants';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CategoryRenderItem from './categoryRenderItem';
import FoodMennuRenderItem from './FoodMenuRenderItem';
import FooterFoodMenu from './FooterRenderItem';
import {HeaderComponents} from '../../common';
import styles from './styles';

interface HomeScreen {
  navigation: any;
  filter: boolean;
  setFilter: React.Dispatch<React.SetStateAction<boolean>>;
  select: number;
  setSelect: (value: number) => void;
  applyFilter: boolean;
  setApplyFilter: React.Dispatch<React.SetStateAction<boolean>>;
  distance: never[];
  setDistance: React.Dispatch<React.SetStateAction<never[]>>;
  deliveryTime: string;
  setDeliveryTime: React.Dispatch<React.SetStateAction<string>>;
  price: never[];
  setPrice: React.Dispatch<React.SetStateAction<never[]>>;
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
  filterData: {
    id: number;
    name: string;
    description: string;
    price: string;
    calories: number;
    isFavourite: boolean;
    categories: number;
    rating: number;
    delivery_time: string;
    distance: number;
    pricing: number;
    image: any;
  }[];
  selectData: {
    id: number;
    name: string;
    description: string;
    price: string;
    calories: number;
    isFavourite: boolean;
    categories: number;
    rating: number;
    delivery_time: string;
    distance: number;
    pricing: number;
    image: any;
  }[];
  ProfileImage: unknown;
  ResetFilter: () => void;
  search: {
    text: string;
    state: boolean;
  };
  setSearch: React.Dispatch<
    React.SetStateAction<{
      text: string;
      state: boolean;
    }>
  >;
  SearchData: {
    id: number;
    name: string;
    description: string;
    price: string;
    calories: number;
    isFavourite: boolean;
    categories: number;
    rating: number;
    delivery_time: string;
    distance: number;
    pricing: number;
    image: any;
  }[];
}

const HomeScreen = (props: HomeScreen) => {
  const {
    navigation,
    filter,
    setFilter,
    select,
    setSelect,
    applyFilter,
    setApplyFilter,
    deliveryTime,
    setDeliveryTime,
    distance,
    setDistance,
    price,
    setPrice,
    rating,
    setRating,
    filterData,
    selectData,
    ProfileImage,
    ResetFilter,
    search,
    setSearch,
    SearchData,
  } = props;

  return (
    <SafeAreaView style={{flex: 1}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={filter}
        style={{backgroundColor: COLORS.transparentBlack7}}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback onPress={() => setFilter(false)}>
            <View style={styles.UpperModal}></View>
          </TouchableWithoutFeedback>
          <ScrollView
            style={styles.modalView}
            showsVerticalScrollIndicator={false}>
            <View style={styles.modalTextContainer}>
              <Text style={styles.FilterText}>{constants.keywords.FILTER}</Text>
              <TouchableOpacity
                style={styles.crossButton}
                onPress={() => setFilter(false)}>
                <Image source={icons.cross} style={styles.crossIcon} />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.distanceText}>
                {constants.keywords.DISTANCE}
              </Text>
              <MultiSlider
                values={[4, 10]}
                min={1}
                max={20}
                step={1}
                sliderLength={SIZES.width - SIZES.padding * 2}
                markerOffsetY={20}
                selectedStyle={{backgroundColor: COLORS.primary}}
                trackStyle={{
                  height: 10,
                  borderRadius: 10,
                  backgroundColor: COLORS.lightGray2,
                }}
                onValuesChange={(item: any) => setDistance(item)}
                minMarkerOverlapDistance={50}
                customMarker={e => {
                  return (
                    <View style={styles.MarkerContainer}>
                      <View style={styles.MarkerCircle}></View>
                      <Text style={styles.MarkerText}>{e.currentValue}Km</Text>
                    </View>
                  );
                }}></MultiSlider>
              <Text style={styles.distanceText}>
                {constants.keywords.DELIVERY_TIME}
              </Text>
              <View>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={constants.delivery_time}
                  extraData={constants.delivery_time}
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity
                        style={[
                          styles.deliverytimeText,
                          {
                            backgroundColor:
                              deliveryTime == item.label
                                ? COLORS.primary
                                : COLORS.lightGray2,
                          },
                        ]}
                        onPress={() => setDeliveryTime(item.label)}>
                        <Text
                          style={[
                            styles.labelText,
                            {
                              color:
                                deliveryTime == item.label
                                  ? COLORS.white
                                  : COLORS.gray,
                            },
                          ]}>
                          {item.label}
                        </Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
              <Text style={styles.distanceText}>
                {constants.keywords.PRICING_RANGE}
              </Text>
              <MultiSlider
                values={[10, 50]}
                min={1}
                max={100}
                step={1}
                sliderLength={SIZES.width - SIZES.padding * 2}
                markerOffsetY={20}
                selectedStyle={{backgroundColor: COLORS.primary}}
                trackStyle={{
                  height: 10,
                  borderRadius: 10,
                  backgroundColor: COLORS.lightGray2,
                }}
                onValuesChange={(item: any) => setPrice(item)}
                minMarkerOverlapDistance={50}
                customMarker={e => {
                  return (
                    <View style={styles.MarkerContainer}>
                      <View style={styles.MarkerCircle}></View>
                      <Text style={styles.MarkerText}>
                        {'$'}
                        {e.currentValue}
                      </Text>
                    </View>
                  );
                }}></MultiSlider>
              <Text style={styles.distanceText}>
                {constants.keywords.RATINGS}
              </Text>
              <View>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={constants.ratings}
                  extraData={constants.ratings}
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity
                        style={[
                          styles.ratingContainer,
                          {
                            backgroundColor:
                              rating > index
                                ? COLORS.primary
                                : COLORS.lightGray2,
                          },
                        ]}
                        onPress={() => setRating(index + 1)}>
                        <Text
                          style={[
                            styles.labelText,
                            {
                              color:
                                rating > index ? COLORS.white : COLORS.gray,
                            },
                          ]}>
                          {item.label}
                        </Text>
                        <Image
                          source={icons.star}
                          style={[
                            styles.starIcon,
                            {
                              tintColor:
                                rating > index ? COLORS.golden : COLORS.gray2,
                            },
                          ]}
                        />
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
              <TouchableOpacity
                style={styles.NextButtonContainer}
                onPress={() => {
                  setApplyFilter(true), setFilter(false);
                }}>
                <Text style={styles.NextButtonText}>
                  {constants.keywords.APPLY_FILTERS}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>
      <View style={styles.colorcontainer}>
        <HeaderComponents
          LeftImage={icons.menu}
          LeftImageNavigate={navigation.openDrawer}
          HeadingText={constants.keywords.HOME}
          RightImage={ProfileImage}
          RightImageNavigate={'MyAccount'}
          navigation={navigation}
        />
        <View style={styles.Container}>
          <View style={styles.searchContainer}>
            <Image source={icons.search} style={styles.searchIcons} />
            <TextInput
              style={styles.searchInput}
              placeholder="search food..."
              value={search.text}
              onChangeText={(item: string) =>
                setSearch({text: item, state: true})
              }
            />
            <TouchableOpacity onPress={() => setFilter(true)}>
              <Image source={icons.filter} style={styles.searchIcons} />
            </TouchableOpacity>
          </View>
        </View>

        {search.state && (
          <View style={[styles.flatListContainer, {paddingTop: 16}]}>
            {SearchData.length == 0 ? (
              <View style={styles.SearchContainer}>
                <TouchableOpacity
                  style={[styles.ResetFilter, {flexDirection: 'row'}]}
                  onPress={() => setSearch({text: '', state: false})}>
                  <Text style={[styles.Search, {textAlign: 'center'}]}>
                    {constants.keywords.NOT_FOUND}
                  </Text>
                  <Image source={icons.cross} style={styles.SearchCross} />
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <View style={styles.SearchContainer}>
                  <TouchableOpacity
                    style={[styles.ResetFilter, {flexDirection: 'row'}]}
                    onPress={() => setSearch({text: '', state: false})}>
                    <Text style={[styles.Search, {color: 'white'}]}>
                      {constants.keywords.Result_FOUND}
                    </Text>
                    <Image source={icons.cross} style={styles.SearchCross} />
                  </TouchableOpacity>
                </View>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={SearchData}
                  extraData={SearchData}
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={({item, index}) => (
                    <FoodMennuRenderItem item={item} navigation={navigation} />
                  )}
                />
              </View>
            )}
          </View>
        )}

        {!search.state && (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.deliveryContainer}>
              <Text style={styles.deliveryText}>
                {constants.keywords.DELIVERY_TO}
              </Text>

              <View style={styles.addressConatiner}>
                <Text style={styles.addressText}>
                  {constants.keywords.ADDRESS_TEXT}
                </Text>
                <TouchableOpacity>
                  <Image source={icons.down_arrow} style={styles.downarrow} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.flatListContainer}>
              {!applyFilter && (
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={dummyData.categories}
                  extraData={dummyData.categories}
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={({item, index}) => (
                    <CategoryRenderItem
                      item={item}
                      select={select}
                      setSelect={setSelect}
                      index={index}
                    />
                  )}
                />
              )}

              {!applyFilter && (
                <View style={styles.textContainer}>
                  <Text style={styles.addressText}>
                    {constants.keywords.POPULAR}
                  </Text>
                  <TouchableOpacity>
                    <Text style={styles.deliveryText}>
                      {constants.keywords.SHOW_ALL}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}

              {!applyFilter && (
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={selectData}
                  extraData={selectData}
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={({item, index}) => (
                    <FoodMennuRenderItem item={item} navigation={navigation} />
                  )}
                />
              )}

              {!applyFilter && (
                <View style={styles.textContainer}>
                  <Text style={styles.addressText}>
                    {constants.keywords.RECOMMENDED}
                  </Text>
                  <TouchableOpacity>
                    <Text style={styles.deliveryText}>
                      {constants.keywords.SHOW_ALL}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}

              {applyFilter && (
                <View style={styles.textContainer}>
                  <Text style={styles.addressText}>
                    {constants.keywords.FILTER_LIST}
                  </Text>
                  <TouchableOpacity
                    style={styles.ResetFilter}
                    onPress={() => {
                      ResetFilter();
                    }}>
                    <Text style={styles.ResetFilterText}>
                      {constants.keywords.RESET_FILTER}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}

              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={filterData}
                extraData={filterData}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({item, index}) => <FooterFoodMenu item={item} />}
                ListFooterComponent={<View style={{height: 175}} />}
              />
            </View>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
