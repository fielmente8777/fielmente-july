import Image from 'next/image';
import React from 'react';

interface FeatureCardProps {
    imageSrc: string;
    title: string;
    subtitle: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ imageSrc, title, subtitle, description }) => {
    return (
        <article className="flex flex-col items-center justify-center group self-stretch me-7">
            <Image src={imageSrc} alt={title} width={60} height={60} className='group-hover:scale-110 group-hover:-translate-y-2 transition duration-300' />
            <p className="mt-4 text-sm text-[#F26633]">{title}</p>
            <h4 className="mt-4 text-3xl text-[#110D3C]">{subtitle}</h4>
            <p className="self-stretch text-center mt-6 text-base text-[#797979] min-h-[16rem]">{description}</p>
        </article>
    );
};

export default FeatureCard;