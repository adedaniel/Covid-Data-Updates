import React from 'react'
export const DoctorIcon = ({ width }) => {
    return (
        <>
            <img src="/images/doctor.png?trace" alt="doctor" width={width} />

        </>
    );

};
export const ConfirmedIcon = ({ width }) => {
    return (
        <>
            <img src="/images/confirmed.png?trace" alt="confirmed" width={width} />

        </>
    );

};
export const GoneIcon = ({ width }) => {
    return (
        <>
            <img src="/images/gone.png?trace" alt="gone" width={width} />

        </>
    );

};
export const FineIcon = ({ width }) => {
    return (
        <>
            <img src="/images/free.png?trace" alt="free" width={width} />

        </>
    );

};
export const CountriesIcon = ({ width }) => {
    return (
        <>
            <img src="/images/countries.png?trace" alt="countries" width={width} />

        </>
    );

};
export const LogoIcon = ({ width }) => {
    return (
        <>
            <img src="/images/ct-logo.png?trace" alt="logo" width={width} />

        </>
    );

};

export const OfflineIcon = ({ width, margin }) => {
    return (
        <>
            <img src="/images/offline.png?trace" alt="logo" />
            <style jsx>{`

            img{
                margin : ${margin || 'unset'};
                width: ${width || '100px'};
            }
            `}</style>
        </>
    );

};

export const NotFoundIcon = ({ width, margin }) => {
    return (
        <>
            <img src="/images/not-found.png?trace" alt="logo" width={width} />
            <style jsx>{`

img{
    margin : ${margin || 'unset'}
}
`}</style>
        </>
    );

};
