/**
 * 빌드 설정 가이드
 *
 * 1. Sass 사용 시 의존성 추가 필수
 *
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: ['./styles'],
    },
};

module.exports = nextConfig;
