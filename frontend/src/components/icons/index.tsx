import { faEnvelope, faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
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
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

type Props = Omit<FontAwesomeIconProps, 'icon'>

export const ArrowDownIcon = (props: Props) => <FontAwesomeIcon icon={faArrowDown} {...props} />

export const BoltIcon = (props: Props) => <FontAwesomeIcon icon={faBolt} {...props} />

export const CircleQuestionIcon = (props: Props) => <FontAwesomeIcon icon={faCircleQuestion} {...props} />

export const CopyrightIcon = (props: Props) => <FontAwesomeIcon icon={faCopyright} {...props} />

export const EnvelopeIcon = (props: Props) => <FontAwesomeIcon icon={faEnvelope} {...props} />

export const EnvelopeSolidIcon = (props: Props) => <FontAwesomeIcon icon={faEnvelopeSolid} {...props} />

export const HeartIcon = (props: Props) => <FontAwesomeIcon icon={faHeart} {...props} />

export const HouseIcon = (props: Props) => <FontAwesomeIcon icon={faHouse} {...props} />

export const LockIcon = (props: Props) => <FontAwesomeIcon icon={faLock} {...props} />

export const MagnifyingGlassIcon = (props: Props) => <FontAwesomeIcon icon={faMagnifyingGlass} {...props} />

export const MoneyBillIcon = (props: Props) => <FontAwesomeIcon icon={faMoneyBill1Wave} {...props} />

export const PhoneIcon = (props: Props) => <FontAwesomeIcon icon={faPhone} {...props} />

export const RepeatIcon = (props: Props) => <FontAwesomeIcon icon={faRepeat} {...props} />

export const TagIcon = (props: Props) => <FontAwesomeIcon icon={faTag} {...props} />

export const TagsIcon = (props: Props) => <FontAwesomeIcon icon={faTags} {...props} />

export const ShieldIcon = (props: Props) => <FontAwesomeIcon icon={faShield} {...props} />

export const UserIcon = (props: Props) => <FontAwesomeIcon icon={faUser} {...props} />

export const UserGroupIcon = (props: Props) => <FontAwesomeIcon icon={faUserGroup} {...props} />
