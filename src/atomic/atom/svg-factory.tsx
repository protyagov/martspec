import React from 'react';

export type IconType = 'shield' | 'sync' | 'noads' | 'nosignup';

interface SvgFactoryProps {
    type: IconType;
    color?: string;
    size?: number | string;
}

const ICONS: Record<IconType, (color: string, size: number | string) => JSX.Element> = {
    shield: (color, size) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 44 44">
        <path stroke={color} strokeLinejoin="round" strokeWidth="4.2" d="m5.5 8.485 16.508-4.818L38.5 8.485v9.88A24.12 24.12 0 0 1 22.003 41.25 24.13 24.13 0 0 1 5.5 18.36z"/>
        <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="m13.75 21.083 6.417 6.417 11-11"/>
        </svg>

    ),
    sync: (color, size) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 44 44">
        <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M5.5 22a16.5 16.5 0 0 1 29.333-10.373"/>
        <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M35.75 5.5v7.333h-7.333M38.5 22A16.5 16.5 0 0 1 9.167 32.371"/>
        <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M8.25 38.5v-7.334h7.333"/></svg>
    ),
    nosignup: (color, size) =>(
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 44 44">
        <path fill="none" stroke={color}  strokeWidth="2.5" 
        d="M21.999 4.917c2.373 0 4.58.45 6.63 1.34a17.4 17.4 0 0 1 5.433 3.68 17.4 17.4 0 0 1 3.68 5.435c.834 1.923 1.282 3.98 1.335 6.185l.006.444c0 2.34-.45 4.54-1.343 6.608a17.4 17.4 0 0 1-3.391 5.162l-.286.294a17.4 17.4 0 0 1-5.436 3.679c-2.05.891-4.255 1.34-6.627 1.34h-.001q-3.508-.002-6.608-1.343-3.133-1.353-5.456-3.678c-1.55-1.55-2.776-3.364-3.678-5.454-.893-2.069-1.342-4.268-1.341-6.608V22c0-2.373.45-4.58 1.34-6.63a17.4 17.4 0 0 1 3.68-5.433A17.3 17.3 0 0 1 15.39 6.26c2.067-.893 4.267-1.342 6.61-1.343Zm-.001 25c-1.742 0-3.403.255-4.974.774a15.1 15.1 0 0 0-4.295 2.222l-1.35 1.003 1.35 1.004a15 15 0 0 0 4.295 2.224c1.572.519 3.232.773 4.975.772 1.743 0 3.404-.255 4.976-.774a15.1 15.1 0 0 0 4.294-2.221l1.351-1.003-1.35-1.004a15 15 0 0 0-4.295-2.225c-1.572-.519-3.234-.774-4.977-.772Zm-12.58-17.67a15.8 15.8 0 0 0-2.461 4.503q-.874 2.484-.874 5.249c0 1.944.321 3.79.974 5.528a15.5 15.5 0 0 0 2.716 4.634l.769.902.941-.72a17.9 17.9 0 0 1 4.887-2.635 16.5 16.5 0 0 1 5.26-.954l.37-.004q.772 0 1.468.064.709.065 1.492.195l3.836.631-7.085-7.085-.423-.053-.216-.031a4.92 4.92 0 0 1-2.747-1.424 4.96 4.96 0 0 1-1.456-2.964l-.054-.424-6.526-6.525zm12.581-6.163c-1.847 0-3.604.296-5.263.9a16.3 16.3 0 0 0-4.49 2.48l-1.113.87 22.532 22.533.87-1.114a16.3 16.3 0 0 0 2.48-4.49c.603-1.657.901-3.415.901-5.263 0-4.393-1.558-8.172-4.65-11.266-2.996-2.997-6.637-4.553-10.857-4.646zm0 6.166c1.482 0 2.682.495 3.678 1.491s1.49 2.194 1.489 3.675q-.001.095-.005.186l-5.349-5.348q.094-.004.187-.004Z"/>
        </svg>
  ),
    noads: (color, size) =>(
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 44 44">
    <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" 
    d="m5.133 5.133 9.92 9.875M38.867 38.71l-3.442-3.426m3.442-5.617V11.332a3 3 0 0 0-3.936-2.85L21.96 12.74m13.464 22.544L13.05 28.43m22.374 6.853-20.37-20.276M13.05 28.431l-5.594-2.024a3 3 0 0 1-1.979-2.821v-3.26a3 3 0 0 1 2.064-2.85l7.513-2.468M13.05 28.431c-3.442 9.936 8.261 15.418 13.769 4.217"/>
    </svg>
    )
};

export const SvgFactory = React.memo<SvgFactoryProps>(({ 
    type, 
    color = "#000000", 
    size = 44 
}) => {
    const renderIcon = ICONS[type];
    
    return renderIcon ? renderIcon(color, size) : null;
});

SvgFactory.displayName = 'SvgFactory';