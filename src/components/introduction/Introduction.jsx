import classNames from 'classnames/bind';
import styles from './Introduction.module.scss';
import Marquee from 'react-fast-marquee';
import { useContext } from 'react';
import { useState } from 'react';
import { MouseContext } from '@/context/mouse-context';
import DecryptedText from '../decryptedText';

const cx = classNames.bind(styles);
const lanOptions = [
    {
        value: 'ENG',
        label: 'ENG',
        text: {
            main: "I am a fourth-year student at Soongsil University (SSU) in Seoul, South Korea's capital.",
            sub: [
                'I am passionate about technology with a strong enthusiasm for exploring the latest trends in this field. I am always eager and prepared to learn and apply new technologies in practice. Additionally, I enjoy sharing and exchanging knowledge with the community to collectively advance in our tech careers.',
                'I am currently looking for a suitable job opportunity for beginners in the field of technology. I am enthusiastic and eager to learn in order to develop my skills and gain experience. I hope to join a dynamic work environment that offers opportunities to apply new knowledge in practice.',
            ],
        },
    },
    {
        value: 'VIE',
        label: 'VIE',
        text: {
            main: 'Tôi là sinh viên năm tư tại Đại học Soongsil (SSU) ở Seoul, thủ đô của Hàn Quốc.',
            sub: [
                'Tôi đam mê công nghệ và luôn hào hứng khám phá những xu hướng mới nhất trong lĩnh vực này. Tôi luôn sẵn sàng học hỏi và áp dụng các công nghệ mới vào thực tiễn. Ngoài ra, tôi cũng thích chia sẻ và trao đổi kiến thức với cộng đồng để cùng nhau phát triển sự nghiệp trong lĩnh vực công nghệ.',
                'Hiện tại, tôi đang tìm kiếm một cơ hội việc làm phù hợp dành cho người mới bắt đầu trong lĩnh vực công nghệ. Tôi nhiệt huyết và ham học hỏi để phát triển kỹ năng và tích lũy kinh nghiệm. Tôi hy vọng sẽ được làm việc trong một môi trường năng động, nơi tôi có thể áp dụng kiến thức mới vào thực tế.',
            ],
        },
    },
    {
        value: 'KOR',
        label: 'KOR',
        text: {
            main: '저는 대한민국 서울에 위치한 숭실대학교(SSU)에서 재학 중인 4학년 학생입니다.',
            sub: [
                '저는 기술에 대한 열정을 가지고 있으며, 이 분야의 최신 트렌드를 탐구하는 데 큰 관심이 있습니다. 새로운 기술을 배우고 실무에 적용하는 것을 항상 준비하고 있습니다. 또한, 커뮤니티와 지식을 공유하고 교류하며 함께 성장하는 것을 즐깁니다.',
                '현재 저는 기술 분야에 입문한 사람에게 적합한 일자리를 찾고 있습니다. 저는 배우고자 하는 열정이 있으며, 이를 통해 제 역량을 키우고 경험을 쌓고자 합니다. 실무에서 새로운 지식을 적용할 수 있는 역동적인 근무 환경에서 일하고 싶습니다.',
            ],
        },
    },
];

function Introduction({ className }) {
    const { cursorChangeHandler } = useContext(MouseContext);
    const [lan, setLan] = useState('ENG');
    const handleClick = (lan) => {
        setLan(lan);
    };
    return (
        <div className={cx('wrapper', className)}>
            <div className={cx('text-wrap')}>
                <div className={cx('lan-selection')}>
                    {lanOptions.map((option) => (
                        <button
                            key={option.value}
                            className={cx('lan-opt-btn', lan === option.value && 'active')}
                            onClick={() => handleClick(option.value)}
                            onMouseEnter={() => cursorChangeHandler('dot')}
                            onMouseLeave={() => cursorChangeHandler('')}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
                <h3 className={cx('main-text')}>{lanOptions.find((option) => option.value === lan).text.main}</h3>

                {lanOptions
                    .find((option) => option.value === lan)
                    .text.sub.map((text, index) => (
                        <div className={cx('sub-text-wrap')} key={index}>
                            <DecryptedText
                                key={index}
                                className={cx('sub-text')}
                                text={text}
                                animateOn="view"
                                speed={100}
                            ></DecryptedText>
                        </div>
                    ))}
            </div>
            <div className={cx('image-wrap')}>
                <div className={cx('image-frame')}>
                    <div className={cx('mask')}></div>

                    <div className={cx('marquee-wrap')}>
                        <Marquee className={cx('marquee')}>
                            <span className={cx('text')}>NGUYEN DANH TUAN</span>
                            <span className={cx('text')}>WEB DEVOLOPER</span>
                            <span className={cx('text')}>FRONT-END</span>
                            <span className={cx('text')}>BACK-END</span>
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
