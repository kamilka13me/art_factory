/* eslint-disable no-nested-ternary */

import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';

import { NavLink } from 'react-router-dom';

import { Icon } from '../Icon';

import ArrowInCircle from '@/shared/assets/icons/ArrowInCircle.svg?react';
import ArrowInCircleBlue from '@/shared/assets/icons/ArrowInCircleBlue.svg?react';
import ArrowVectorGray from '@/shared/assets/icons/ArrowVectorGray.svg?react';

type VariantTypes =
  | 'clear'
  | 'primary'
  | 'arrow'
  | 'textBlue'
  | 'arrowTextBlue'
  | 'ArrowVectorGray';

const variantClasses: Record<VariantTypes, string> = {
  clear: '',
  arrow: '',
  arrowTextBlue: '',
  ArrowVectorGray: '',
  textBlue: '',
  primary:
    'bg-main py-2 px-4 text-main-dark rounded-lg hover:bg-secondary-yellow disabled:bg-disabled duration-200',
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  to: string;
  text?: string;
  size?: string;
  children?: string | ReactNode;
  onClick?: () => void;
  variant: VariantTypes;
  className?: string;
}

const ButtonLink = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { children, onClick, text, variant, to, size, className, ...otherProps } = props;

  return (
    <NavLink to={to}>
      <button
        ref={ref}
        onClick={onClick}
        {...otherProps}
        type="button"
        className={`text-center ${variantClasses[variant]} ${className} `}
      >
        {variant === 'arrow' ? (
          <Icon Svg={ArrowInCircle} width={45} height={45} className="min-w-[45px]" />
        ) : variant === 'textBlue' ? (
          <div className="flex items-center gap-3">
            <span className="font-sans font-medium text-[#151515]">{text}</span>
            <Icon
              Svg={ArrowInCircleBlue}
              width={size || 45}
              height={size || 45}
              className="min-w-[45px]"
            />
          </div>
        ) : variant === 'ArrowVectorGray' ? (
          <div className="flex items-center gap-3">
            {/* <span className="font-sans font-medium text-[#151515]">{text}</span> */}
            <Icon Svg={ArrowVectorGray} width={size || 45} height={size || 45} />
          </div>
        ) : variant === 'arrowTextBlue' ? (
          <div className="flex items-center  ">
            {text ? (
              <span className="font-sans py-[12px] px-[18px] text-[18px] font-medium text-white bg-[#2C05F2] rounded-[30px]">
                {text}
              </span>
            ) : (
              ''
            )}

            <Icon
              Svg={ArrowInCircleBlue}
              width={size || 49}
              height={size || 49}
              className="min-w-[45px]"
            />
          </div>
        ) : (
          children
        )}
      </button>
    </NavLink>
  );
});

export default ButtonLink;
