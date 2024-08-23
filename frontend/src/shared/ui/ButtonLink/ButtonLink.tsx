import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import ArrowInCircle from '@/shared/assets/icons/ArrowInCircle.svg?react';
import ArrowInCircleBlue from '@/shared/assets/icons/ArrowInCircleBlue.svg?react';
import { Icon } from '../Icon';

type VariantTypes = 'clear' | 'primary' | 'arrow' | 'textBlue';

const variantClasses: Record<VariantTypes, string> = {
  clear: '',
  arrow: '',
  textBlue: '',
  primary:
    'bg-main py-2 px-4 text-main-dark rounded-lg hover:bg-secondary-yellow disabled:bg-disabled duration-200',
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  to: string;
  text?: string;
  children?: string | ReactNode;
  onClick?: () => void;
  variant: VariantTypes;
  className?: string;
}

const ButtonLink = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { children, onClick, text, variant, to, className, ...otherProps } = props;

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
              width={45}
              height={45}
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
