import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faEnvelope,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowDown,
  faBolt,
  faCircleQuestion,
  faCopyright,
  faEnvelope as faEnvelopeSolid,
  faHouse,
  faLock,
  faMagnifyingGlass,
  faMoneyBill1Wave,
  faPhone,
  faRepeat,
  faShield,
  faTag,
  faTags,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

// fa-regular fa-envelope position-absolute fs-4"
// fa-solid fa-lock position-absolute fs-4"
// fa-solid fa-repeat position-absolute fs-4"

export const ArrowDownIcon = (props: FontAwesomeIconProps) => (
  <FontAwesomeIcon icon={faArrowDown} {...props} />
);

export const BoltIcon = (props: FontAwesomeIconProps) => (
  <FontAwesomeIcon icon={faBolt} {...props} />
);

export const CircleQuestionIcon = (props: FontAwesomeIconProps) => (
  <FontAwesomeIcon icon={faCircleQuestion} {...props} />
);

export const CopyrightIcon = (props: FontAwesomeIconProps) => (
  <FontAwesomeIcon icon={faCopyright} {...props} />
);

export const EnvelopeIcon = (props: FontAwesomeIconProps) => (
  <FontAwesomeIcon icon={faEnvelope} {...props} />
);

export const EnvelopeSolidIcon = (props: FontAwesomeIconProps) => (
  <FontAwesomeIcon icon={faEnvelopeSolid} {...props} />
);

export const HeartIcon = (props: FontAwesomeIconProps) => (
  <FontAwesomeIcon icon={faHeart} {...props} />
);

export const HouseIcon = (props: FontAwesomeIconProps) => (
  <FontAwesomeIcon icon={faHouse} {...props} />
);

export const LockIcon = (props: FontAwesomeIconProps) => (
  <FontAwesomeIcon icon={faLock} {...props} />
);

export const MagnifyingGlassIcon = (props: FontAwesomeIconProps) => (
  <FontAwesomeIcon icon={faMagnifyingGlass} {...props} />
);

export const MoneyBillIcon = (props: FontAwesomeIconProps) => (
  <FontAwesomeIcon icon={faMoneyBill1Wave} {...props} />
);

export const PhoneIcon = (props: FontAwesomeIconProps) => (
  <FontAwesomeIcon icon={faPhone} {...props} />
);

export const RepeatIcon = (props: FontAwesomeIconProps) => (
  <FontAwesomeIcon icon={faRepeat} {...props} />
);

export const TagIcon = (props: FontAwesomeIconProps) => (
  <FontAwesomeIcon icon={faTag} {...props} />
);

export const TagsIcon = (props: FontAwesomeIconProps) => (
  <FontAwesomeIcon icon={faTags} {...props} />
);

export const ShieldIcon = (props: FontAwesomeIconProps) => (
  <FontAwesomeIcon icon={faShield} {...props} />
);

export const UserIcon = (props: FontAwesomeIconProps) => (
  <FontAwesomeIcon icon={faUser} {...props} />
);

export const UserGroupIcon = (props: FontAwesomeIconProps) => (
  <FontAwesomeIcon icon={faUserGroup} {...props} />
);
