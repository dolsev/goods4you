const Section = ({ background, children }: { background?: string; children: React.ReactNode }) => {
    return <section style={{ backgroundColor: background }}>{children}</section>;
};

export default Section;
