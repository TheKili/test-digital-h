import { User } from './types/user.interface';
import { Icon } from './types/icon.enum';

export const getUsersBadge = ( user: User ): Icon | null => {
  const {solutionCount} = user;

  if ( solutionCount > 2000 ) return Icon.BADGE_GODLIKE;
  if ( solutionCount > 100 )  return Icon.BADGE_PLATINUM;
  if ( solutionCount >= 50 )  return Icon.BADGE_GOLD;
  if ( solutionCount >= 25 )  return Icon.BADGE_SILVER;
  if ( solutionCount >= 5)    return Icon.BADGE_BRONZE;
  if ( solutionCount > 1)     return Icon.BADGE_STARTER;
  if ( solutionCount < 0)     return Icon.BADGE_BADASS;
  return Icon.DEFAULT ;

};
