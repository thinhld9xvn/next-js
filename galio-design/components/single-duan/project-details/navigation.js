import React from 'preact/compat'
import Link from 'next/link'

export default function Navigation({ data, messages }) {
    const {previous_project, next_project} = messages;
    const {previous, next} = data;
    return (
        <div className="btn__project-group wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
            {previous ? (
                <>
                    <Link href={previous.url}>
                        <a className="btn btn__project-prev">
                            {previous_project}
                        </a>
                    </Link>
                </>
            ) : <a className="btn btn__project-prev hide-navigator"></a> }
            {next ? (
                <>
                    <Link href={next.url}>
                        <a className="btn btn__project-next">
                            {next_project}
                        </a>
                    </Link>
                </>
            ) : <a className="btn btn__project-next hide-navigator"></a>}
        </div>
    )
}
