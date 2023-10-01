import { User } from './types/user.interface';
import { Icon } from './types/icon.enum';

export const getUsersBadge = ( user: User ): Icon | null => {
  const {solutionCount} = user;
  switch ( true ) {
    case ( solutionCount >= 50 ):
      return Icon.BADGE_GOLD;
    case ( solutionCount >= 25 ):
      return Icon.BADGE_SILVER;
    case ( solutionCount >= 5):
      return Icon.BADGE_BRONZE;
    default:
      return Icon.DEFAULT ;
   }
};
