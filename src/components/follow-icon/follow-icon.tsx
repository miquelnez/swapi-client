import { BsHeartFill, BsHeart } from 'react-icons/bs';

interface FollowIconProps {
  testId?: string;
  following?: boolean;
  id?: number;
  [x: string]: any;
}

const FollowIcon = ({
  following = false,
  testId = 'follow-icon',
  id = 0,
  ...rest
}: FollowIconProps) => {
  return (
    <>
      {following ? (
        <BsHeartFill
          data-test={`${testId}-${id}`}
          data-testid={`${testId}-${id}`}
          color={'red.750'}
          cursor={'pointer'}
          {...rest}
        />
      ) : (
        <BsHeart
          data-test={`${testId}-${id}`}
          data-testid={`${testId}-${id}`}
          color={'red.750'}
          cursor={'pointer'}
          {...rest}
        />
      )}
    </>
  );
};

export default FollowIcon;
