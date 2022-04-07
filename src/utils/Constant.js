import {Dimensions} from 'react-native';

export const SUBSCRIPTION_URL = 'https://www.talloo.com/#plans';
export const FREE_PLAN = 'free-plan';
export const MAIN_STREET_PLAN = 'main-street';
export const MID_MARKET_PLAN = 'mid-market';

export const PUBLIC_AUDIENCE = 'Public';
export const FREE_AUDIENCE = 'Members';
export const MAIN_STREET_AUDIENCE = 'Main Street';
export const MID_MARKET_AUDIENCE = 'Mid-Market';

export const FREE_MEMBER = 'Guest';
export const MAIN_STREET_MEMBER = 'Main Street Member';
export const MID_MARKET_MEMBER = 'Mid-Market Member';

export const WINDOWS = Dimensions.get('window');
export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

/* ASSET IMAGE FILE NAME */

export const IMAGE_CONSTANT = {
  ADD: require('../../../talloo/assets/add.png'),
  APP_LOGO: require('../../../talloo/assets/ic_launcher.png'),
  SELECT_TODAY: require('../../../talloo/assets/sel_today.png'),
  UNSEL_TODAY: require('../../../talloo/assets/unsel_today.png'),
  SEL_USER: require('../../../talloo/assets/sel_user.png'),
  UNSEL_USER: require('../../../talloo/assets/unsel_user.png'),
  TIMER_ICON: require('../../../talloo/assets/time.png'),
  USER: require('../../../talloo/assets/ic_profile.png'),
  GOOGLE: require('../../../talloo/assets/ic_google.png'),
};

export const EVENT_CATEGORY_CONSTANT = {
  TALLOO: require('../../../talloo/assets/ic_launcher.png'),
  ADVENTURE: require('../../../talloo/assets/EventCategory/adventure.png'),
  CIVIC: require('../../../talloo/assets/EventCategory/civic.png'),
  CONFERENCE: require('../../../talloo/assets/EventCategory/conference.png'),
  DINNER_PARTY: require('../../../talloo/assets/EventCategory/dinner-party.png'),
  FESTIVAL: require('../../../talloo/assets/EventCategory/festival.png'),
  GALA: require('../../../talloo/assets/EventCategory/gala.png'),
  JOB_FAIR: require('../../../talloo/assets/EventCategory/job-fair.png'),
  NETWORKING: require('../../../talloo/assets/EventCategory/networking.png'),
  SEMINAR: require('../../../talloo/assets/EventCategory/seminar.png'),
  SOCIAL: require('../../../talloo/assets/EventCategory/social.png'),
  WORKSHOP: require('../../../talloo/assets/EventCategory/workshop.png'),
  AGRICULTURE: require('../../../talloo/assets/EventCategory/agriculture.png'),
  CONSTRUCTION: require('../../../talloo/assets/EventCategory/construction.png'),
  EVENING_SOCIAL: require('../../../talloo/assets/EventCategory/evening_social.png'),
  GENERAL_BUSINESS: require('../../../talloo/assets/EventCategory/general_business.png'),
  MANUFACTURING: require('../../../talloo/assets/EventCategory/manufacturing.png'),
  MORNING_SOCIAL: require('../../../talloo/assets/EventCategory/morning_social.png'),
  OPEN_CIRCLE: require('../../../talloo/assets/EventCategory/open_circle.png'),
  MEDICAL: require('../../../talloo/assets/EventCategory/medical.png'),
};

export const TAB_FOOTER_IMAGE_CONSTANT = {
  EVENT_HOME: require('../../../talloo/assets/FooterTab/FloatFooter/ic_home.png'),
  EVENT_HOME_SELECTED: require('../../../talloo/assets/FooterTab/FloatFooter/ic_sel_home.png'),
  CHATS: require('../../../talloo/assets/FooterTab/FloatFooter/ic_chat.png'),
  CHATS_SELECTED: require('../../../talloo/assets/FooterTab/FloatFooter/ic_sel_chat.png'),
  ADD_EVENT: require('../../../talloo/assets/FooterTab/FloatFooter/ic_addevent.png'),
  ADD_EVENT_SELECTED: require('../../../talloo/assets/FooterTab/FloatFooter/ic_sel_addevent.png'),
  USER_DIRECTORY: require('../../../talloo/assets/FooterTab/FloatFooter/ic_contacts.png'),
  USER_DIRECTORY_SELECTED: require('../../../talloo/assets/FooterTab/FloatFooter/ic_sel_contacts.png'),
  CALENDER_EVENT: require('../../../talloo/assets/FooterTab/FloatFooter/ic_calendar.png'),
  CALENDER_EVENT_GRAY: require('../../../talloo/assets/FooterTab/FloatFooter/ic_calendar_gray.png'),
  REFERRAL: require('../../../talloo/assets/FooterTab/FloatFooter/ic_referral.png'),
  FOOTER_BACK: require('../../../talloo/assets/FooterTab/footer_back.png'),
  FOOTER_EVENT: require('../../../talloo/assets/FooterTab/footer_event.png'),
  FOOTER_ADD: require('../../../talloo/assets/FooterTab/footer_add.png'),
  FOOTER_TICKET: require('../../../talloo/assets/FooterTab/footer_ticket.png'),
  FOOTER_SHARE: require('../../../talloo/assets/FooterTab/ic_share.png'),
  PROFILE: require('../../../talloo/assets/FooterTab/FloatFooter/ic_default_profile.png'),
  CALENDAR: require('../../../talloo/assets/FooterTab/FloatFooter/ic_sel_calendar.png'),
  SETTINGS: require('../../../talloo/assets/FooterTab/ic_settings.png'),
  ContactList: require('../../../talloo/assets/MsgEvent/userSolidMod.png'),
  ContactListRed: require('../../../talloo/assets/MsgEvent/userSolidModRed.png'),
  Messsage: require('../../../talloo/assets/MsgEvent/commentsSolid.png'),
  MesssageRed: require('../../../talloo/assets/MsgEvent/commentsSolidRed.png'),
  AddScreen: require('../../../talloo/assets/MsgEvent/plusSolid.png'),
  AddScreenRed: require('../../../talloo/assets/MsgEvent/plusSolidRed.png'),
  CalendarSolid: require('../../../talloo/assets/MsgEvent/calendarSolid.png'),
  CalendarSolidRed: require('../../../talloo/assets/MsgEvent/calendarSolidRed.png'),
  BarsSolid: require('../../../talloo/assets/MsgEvent/barsSolid.png'),
  BarsSolidRed: require('../../../talloo/assets/MsgEvent/barsSolidRed.png'),
  dollarSignSolid: require('../../../talloo/assets/MsgEvent/dollarSignSolid.png'),
  CommentSolid: require('../../../talloo/assets/MsgEvent/commentSolid.png'),
  UsersSolid: require('../../../talloo/assets/MsgEvent/usersSolid.png'),
};

export const NEW_PROFILE_IMG = {
  ANGLE_DOWN: require('../../../talloo/assets/newProfile/angle_down_light.png'),
  ANGLE_LEFT: require('../../../talloo/assets/newProfile/angle_left_light.png'),
  ANGLE_RIGHT: require('../../../talloo/assets/newProfile/angle_right_light.png'),
  ARROW_DOWN: require('../../../talloo/assets/newProfile/arrow_down_light.png'),
  ARROW_UP: require('../../../talloo/assets/newProfile/arrow_up_light.png'),
  BELL: require('../../../talloo/assets/newProfile/bell_light.png'),
  COMMENTS: require('../../../talloo/assets/newProfile/comments_light.png'),
  DOOR_OPEN: require('../../../talloo/assets/newProfile/door_open_light.png'),
  ELLIPSIS: require('../../../talloo/assets/newProfile/ellipsis_h_light.png'),
  ENVELOPE: require('../../../talloo/assets/newProfile/envelope_light.png'),
  EXTERNAL: require('../../../talloo/assets/newProfile/external_link_light.png'),
  MAP_MARKER_LIGHT: require('../../../talloo/assets/newProfile/map_marker_light.png'),
  PENCIL: require('../../../talloo/assets/newProfile/pencil_light.png'),
  PHONE: require('../../../talloo/assets/newProfile/phone_light.png'),
  PLUS: require('../../../talloo/assets/newProfile/plus_light.png'),
  STAR_LIGHT: require('../../../talloo/assets/newProfile/star_light.png'),
  TIMES_LIGHR: require('../../../talloo/assets/newProfile/times_light.png'),
};
export const NAVIGATION_SCREENS = {
  signIn: 'SignIn',
  login: 'Login',
  signup: 'Signup',
  verificationCode: 'VerificationCode',
  forgetPassword: 'ForgetPassword',
  home: 'Home',
  eventDetail: 'EventDetail',
  people: 'People',
  addEventScreen: 'AddEventScreen',
  createProfile: 'CreateProfile',
  profile: 'Profile',
  contact: 'Contact',
  selectLocation: 'SelectLocation',
  searchAddress: 'SearchAddress',
  newPassword: 'NewPassword',
};

export const DB_KEYS = {
  userId: 'userId',
  isauth: 'isauth',
  isTallooUser: 'isTallooUser',
  chats: 'chats',
  users: 'users',
  events: 'events',
};

export const URL_CONSTANTS = {
  domainName: 'talloo.com',
};

export const PRIVACY_CONSTANTS = {
  iscall: 'call',
  isemail: 'email',
  ismessage: 'message',
};

export const CHAT_CONSTANTS = {
  chat_id: 'chat_id',
  chat_text: 'message',
  chat_name: 'chat_name',
  chat_img: 'avatar',
  chat_user: 'user',
  createdAt: 'createdAt',
  members: 'members',
  singleChat: 'singleChat',
  groupedChat: 'groupedChat',
};

export const FIREBASE_DB_CONSTANT = {
  PROFILE_TAG: 'profile_tags',
  USERS: 'users',
  USERS_KEYWORD: 'user_keyword',
};

export const eventCategorylist = [
  // { "label": "Open Circle", "value": "OpenCircle" },
  // { "label": "Morning Social", "value": "MorningSocial" },
  // { "label": "Evening Social", "value": "EveningSocial" },
  {label: 'General Business', value: 'GeneralBusiness'},
  {label: 'Construction', value: 'Construction'},
  {label: 'Manufacturing', value: 'Manufacturing'},
  {label: 'Agriculture', value: 'Agriculture'},
  {label: 'Medical', value: 'Medical'},
  {label: 'Social', value: 'Social'},
];

export const adminAudiencelist = [
  // { "label": "Members", "value": "Members" },
  // { "label": "Main Street", "value": "Main Street" },
  // { "label": "Mid-Market", "value": "Mid-Market" },
  {label: 'Public', value: 'Public'},
  {label: 'Talloo Members + Guests', value: 'Talloo Members + Guests'},
  {
    label: 'Associate Membership Required',
    value: 'Associate Membership Required',
  },
  {
    label: 'Professional Membership Required',
    value: 'Professional Membership Required',
  },
];

export const days = [
  {label: 'Sunday', value: 'Sunday'},
  {label: 'Monday', value: 'Monday'},
  {label: 'Tuesday', value: 'Tuesday'},
  {label: 'Wednesday', value: 'Wednesday'},
  {label: 'Thursday', value: 'Thursday'},
  {label: 'Friday', value: 'Friday'},
  {label: 'Saturday', value: 'Saturday'},
];

export const audiencelist = [
  // { "label": "Members", "value": "Members" },
  // { "label": "Main Street", "value": "Main Street" },
  // { "label": "Mid-Market", "value": "Mid-Market" },
  {label: 'Public', value: 'Public'},
  {label: 'Talloo Members + Guests', value: 'Talloo Members + Guests'},
  {
    label: 'Associate Membership Required',
    value: 'Associate Membership Required',
  },
  {
    label: 'Professional Membership Required',
    value: 'Professional Membership Required',
  },
];

export const tallooEventCategorylist = [
  {label: 'Talloo', value: 'Talloo'},
  // { "label": "Open Circle", "value": "OpenCircle" },
  // { "label": "Morning Social", "value": "MorningSocial" },
  // { "label": "Evening Social", "value": "EveningSocial" },
  {label: 'General Business', value: 'GeneralBusiness'},
  {label: 'Construction', value: 'Construction'},
  {label: 'Manufacturing', value: 'Manufacturing'},
  {label: 'Agriculture', value: 'Agriculture'},
  {label: 'Medical', value: 'Medical'},
  {label: 'Social', value: 'Social'},
];

export const API_TIMEOUT = 10000;
