const onboarding_screens = [
  {
    id: 1,
    backgroundImage: require('../assets/images/background_01.png'),
    bannerImage: require('../assets/images/favourite_food.png'),
    title: 'Choose a Favourite Food',
    description:
      'When you oder Eat Steet, we’ll hook you up with exclusive coupon, specials and rewards',
  },
  {
    id: 2,
    backgroundImage: require('../assets/images/background_02.png'),
    bannerImage: require('../assets/images/hot_delivery.png'),
    title: 'Hot Delivery to Home',
    description:
      'We make food ordering fasr, simple and free-no matter if you order online or cash',
  },
  {
    id: 3,
    backgroundImage: require('../assets/images/background_01.png'),
    bannerImage: require('../assets/images/great_food.png'),
    title: 'Receive the Great Food',
    description:
      'You’ll receive the great food within a hour. And get free delivery credits for every order.',
  },
];

const keywords = {
  NEXT: 'Next',
  SKIP: 'Skip',
  STARTED: 'Let’s Get Started',
  LETS_SIGN_IN: 'Let’s Sign You In',
  WELCOME: 'Welcome back, you’ve been missed',
  INVALID: 'Invalid',
  ERROR_MESSAGE: 'must be 8 characters',
  SAVE: 'Save Me',
  PASSWORD: 'Forgot Password?',
  SIGN_IN: 'Sign In',
  ACCOUNT: 'Don’t have an account?',
  SIGN_UP: 'Sign Up',
  FACEBOOK: 'Continue With Facebook',
  GOOGLE: 'Continue With Google',
  GETTING_STARTED: 'Getting Started',
  CREATED: 'Create an account to continue!',
  ALREADY_ACCOUNT: 'Already have an account?',
  OTP: 'OTP Authentication',
  AUTHENTICATION:
    'An authentication code has been sent to abhishek.garg@successive.tech',
  CODE: 'Didn’t receive code?',
  RESEND: 'Resend (59s)',
  CONTINUE: 'Continue',
  BY_SIGINING_UP: 'By signing up, you agree to our.',
  TERM: 'Terms and Conditions',
  PASSWORD_RECOVERY: 'Password Recovery',
  PLEASE: 'Please enter your email address to recover your password',
  SEND_EMAIL: 'Send Email',
  HOME: 'HOME',
  DELIVERY_TO: 'DELIVERY TO',
  ADDRESS: 'E-Block Budh Vihar, Noida',
  POPULAR: 'Popular Near You',
  SHOW_ALL: 'Show All',
  CALORIES: 'Calories',
  RECOMMENDED: 'Recommended',
  FILTER: 'Filter You Search',
  DISTANCE: 'Distance',
  DELIVERY_TIME: 'Delivery Time',
  PRICING_RANGE: 'Pricing Range',
  RATINGS: 'Ratings',
  TAGS: 'Tags',
  APPLY_FILTERS: 'Apply Filters',
  DETAILS: 'DETAILS',
  HAMBURGER: 'Hamburger',
  RATING: '4.5',
  MINUTES: '30 Mins',
  FREE_SHIPPING: 'Free shipping',
  SIZES: 'Sizes:',
  NAME: 'Alex',
  KM: '1.2 KM away from you',
  BUY_NOW: 'Buy Now',
  MY_CART: 'MY CART',
  PLACE: 'Place your Order',
  SUB_TOTAL: 'Subotal',
  SHIPPING_FEE: 'Shipping fee',
  TOTAL: 'Total',
  MY_CARDS: 'MY CARDS',
  ADD_NEW_CARD: 'Add new card',
  ADD: 'Add',
  CARD_NO: '1234123412341234',
  DATE: '10/25',
  CARD_NUMBER_TEXT: 'Card Number',
  CARD_HOLDER_NAME: 'CardHolder Name',
  EXPIRY_DATE: 'Expiry Date',
  CVV: 'CVV',
  REMEMBER: 'Remember this card details',
  ADD_CARD: 'Add Card',
  CHECKOUT: 'CHECKOUT',
  DELIVERY_ADDRESS: 'Delivery Address',
  ADD_COUPON: 'Add Coupon',
  CONGRATS: 'Congratulations!',
  PAYMENT_WAS: 'Payment was successfully made!',
  DONE: 'Done',
  VIEW_YOUR_PROFILE: 'View your profile',
  DELIVERY_STATUS: 'DELIVERY STATUS',
  ESTIMATED: 'Estimated Delivery',
  DELIVERY_DATE: '12 Sept 2020 / 12:30PM',
  TRACK_ORDER: 'Track Order',
  ID: 'NY021SNI',
  MYCOUPON: 'MY COUPON',
  AVAILABLE: 'Available',
  USED: 'Used',
  NOTIFICATION: 'NOTIFICATION',
  SETTINGS: 'SETTINGS',
  CHNAGE_PASSWORD: 'CHANGE PASSWORD',
  CHANGE_PASSWORD_SMALL_CASE: 'Change Password',
  MY_ORDERS: 'MY ORDERS',
  HISTORY: 'History',
  UPCOMING: 'Upcoming',
  ORDER_DELIVERED: 'Order Delivered',
  ORDER_CANCELLED: 'Order Cancelled',
  RE_ORDER: 'Re-Order',
  RATE: 'Rate',
  CANCEL: 'Cancel',
  RIDER_REVIEW: 'RIDER REVIEW',
  DELIVERY_MAN: 'Delivery Man',
  PLEASE_RATE: 'Please Rate Delivery Service',
  ADD_TIPS: 'Add Tips',
  SUBMIT_REVIEW: 'Submit Review',
  MY_ACCOUNT: 'MY ACCOUNT',
  EDIT: 'Edit',
  CAMERA: 'Camera',
  GALLERY: 'Gallery',
  ABHISHEK_GARG: 'Hello Alex!',
  FILTER_LIST: 'Filtered List :',
  RESET_FILTER: 'Reset Filter',
  NOT_FOUND: 'Not Found',
  Result_FOUND: 'Search Found',
  COUPON_CODE: 'Coupon Code',
  NUMBER: '8923735637',
  ID_CARD: 'ST/SD/21/820',
  DOB: '26/02/1999',
  GENDER: 'Male',
  EMAIL: 'alex123@gmail.com',
  ADDRESS_TEXT: 'E-29, Budh Vihar, Noida',
  ALERT_MESSAGE: 'Please Contact Developer Team!',
};

const screens = {
  main_layout: 'MainLayout',
  home: 'Home',
  search: 'Search',
  cart: 'Cart',
  favourite: 'Favourite',
  notification: 'Notification',
  my_wallet: 'My Wallet',
};

const bottom_tabs = [
  {
    id: 0,
    label: screens.home,
  },
  {
    id: 1,
    label: screens.search,
  },
  {
    id: 2,
    label: screens.cart,
  },
  {
    id: 3,
    label: screens.favourite,
  },
  {
    id: 4,
    label: screens.notification,
  },
];

const delivery_time = [
  {
    id: 1,
    label: '10 Mins',
  },
  {
    id: 2,
    label: '20 Mins',
  },
  {
    id: 3,
    label: '30 Mins',
  },
];

const ratings = [
  {
    id: 1,
    label: 1,
  },
  {
    id: 2,
    label: 2,
  },
  {
    id: 3,
    label: 3,
  },
  {
    id: 4,
    label: 4,
  },
  {
    id: 5,
    label: 5,
  },
];

const tags = [
  {
    id: 1,
    label: 'Burger',
  },
  {
    id: 2,
    label: 'Fast Food',
  },
  {
    id: 3,
    label: 'Pizza',
  },
  {
    id: 4,
    label: 'Asian',
  },
  {
    id: 5,
    label: 'Dessert',
  },
  {
    id: 6,
    label: 'Breakfast',
  },
  {
    id: 7,
    label: 'Vegetable',
  },
  {
    id: 8,
    label: 'Taccos',
  },
];

const track_order_status = [
  {
    id: 1,
    title: 'Order Confirmed',
    sub_title: 'Your order has been received',
    tick: true,
  },
  {
    id: 2,
    title: 'Order Prepared',
    sub_title: 'Your order has been prepared',
    tick: false,
  },
  {
    id: 3,
    title: 'Delivery in Progress',
    sub_title: 'Hang on! Your food is on the way',
    tick: false,
  },
  {
    id: 4,
    title: 'Delivered',
    sub_title: 'Enjoy your meal!',
    tick: false,
  },
  {
    id: 5,
    title: 'Rate Us',
    sub_title: 'Help us improve our service',
    tick: false,
  },
];

const GOOGLE_MAP_API_KEY = '';

export default {
  onboarding_screens,
  screens,
  bottom_tabs,
  delivery_time,
  ratings,
  tags,
  track_order_status,
  GOOGLE_MAP_API_KEY,
  keywords,
};
