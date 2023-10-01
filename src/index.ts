import { User } from './types/user.interface';
import { Icon } from './types/icon.enum';

export const getUsersBadge = ( user: User ): Icon | null => {
  let badge = Icon.DEFAULT;
  switch ( true ) {
    case ( user.solutionCount >= 50 ):
      badge = Icon.BADGE_GOLD;
      break;
    case ( user.solutionCount >= 25 ):
      badge = Icon.BADGE_SILVER;
      break;
    case ( user.solutionCount >= 5):
      badge = Icon.BADGE_BRONZE;
      break;


  }
  return badge;
};
