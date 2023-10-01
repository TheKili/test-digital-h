import { User } from './types/user.interface';
import { Icon } from './types/icon.enum';

export const getUsersBadge = ( user: User ): Icon | null => {

  switch ( true ) {
    case ( user.solutionCount >= 50 ):
      return Icon.BADGE_GOLD;
      break;
    case ( user.solutionCount >= 25 ):
      return Icon.BADGE_SILVER;
      break;
    case ( user.solutionCount >= 5):
      return Icon.BADGE_BRONZE;
      break;
    default:
      return Icon.DEFAULT ;
   }
};
