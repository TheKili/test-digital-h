import { getUsersBadge } from './index';
import { Icon } from './types/icon.enum';
import { User } from './types/user.interface';

describe('getUsersBadge', () => {

  it(`get God like`, async function () {
    expect(getUsersBadge(getUserMock(2001))).toEqual(Icon.BADGE_GODLIKE);
    expect(getUsersBadge(getUserMock(10000))).toEqual(Icon.BADGE_GODLIKE);
  });

  it(`get Platinum`, async function () {
    expect(getUsersBadge(getUserMock(101))).toEqual(Icon.BADGE_PLATINUM);
    expect(getUsersBadge(getUserMock(2000))).toEqual(Icon.BADGE_PLATINUM);
  });

  it(`get Gold`, async function () {
    expect(getUsersBadge(getUserMock(100))).toEqual(Icon.BADGE_GOLD);
    expect(getUsersBadge(getUserMock(50))).toEqual(Icon.BADGE_GOLD);
  });

  it(`get Silver`, async function () {
    expect(getUsersBadge(getUserMock(25))).toEqual(Icon.BADGE_SILVER);
    expect(getUsersBadge(getUserMock(49))).toEqual(Icon.BADGE_SILVER);
    expect(getUsersBadge(getUserMock(30))).toEqual(Icon.BADGE_SILVER);
  });

  it(`get Bronze`, async function () {
    expect(getUsersBadge(getUserMock(5))).toEqual(Icon.BADGE_BRONZE);
    expect(getUsersBadge(getUserMock(24))).toEqual(Icon.BADGE_BRONZE);
    expect(getUsersBadge(getUserMock(10))).toEqual(Icon.BADGE_BRONZE);
  });

  it(`get Starter`, async function () {
    expect(getUsersBadge(getUserMock(2))).toEqual(Icon.BADGE_STARTER);
    expect(getUsersBadge(getUserMock(4))).toEqual(Icon.BADGE_STARTER);
  });

  it(`get Bad ass`, async function () {
    expect(getUsersBadge(getUserMock(-1))).toEqual(Icon.BADGE_BADASS);
    expect(getUsersBadge(getUserMock(-42342))).toEqual(Icon.BADGE_BADASS);
  });

  it(`get no Icon`, async function () {
    expect(getUsersBadge(getUserMock(0))).toEqual(null);
    expect(getUsersBadge(getUserMock(1))).toEqual(null);
  });

});

function getUserMock(count: number): User {
  return {
    id: '___',
    username: '___',
    solutionCount: count
  };
}
