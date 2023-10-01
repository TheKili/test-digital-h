import { User } from './types/user.interface';
import { Icon } from './types/icon.enum';

export const getUsersBadge = ( user: User ): Icon | null => {
  const {solutionCount} = user;
  if ( solutionCount >= 50 )  return Icon.BADGE_GOLD;
  if ( solutionCount >= 25 )  return Icon.BADGE_SILVER;
  if ( solutionCount >= 5)    return Icon.BADGE_BRONZE;
  return Icon.DEFAULT ;

};
