/**
 * 무작위 수 가져오기
 * 정수단위로 반환
 *
 * @param max 최대 반환될 수
 */
export const getRandomNumber = (max: number): number => {
    return Math.floor(Math.random() * max);
}