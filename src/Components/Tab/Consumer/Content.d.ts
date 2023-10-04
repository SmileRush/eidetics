import { TabTypes } from '../Types';
/**
 * 해당 컴포넌트는 탭의 내용을 렌더링합니다.
 * @param id - 탭의 고유 아이디입니다.
 * @param children - 탭 내용으로 렌더링될 자식 요소입니다.
 * @param rest - 나머지 props입니다.
 * @returns 해당 탭이 활성화되어 있을 때 자식 요소를 렌더링합니다. 그렇지 않으면 undefined를 반환합니다.
 */
export declare const Content: TabTypes['Parts']['Content'];
