/**
 * Breakpoint guide
 */
import $ from 'jquery';

export default function breakpoints() {
    var siteroot = $('body').attr('data-siteroot');
    var bpgmarkup = `
        <div class="breakpointguide">
            <link rel="stylesheet" href="${siteroot}/stylesheets/breakpointguide.css" />
            <span class="breakpointguide-label"></span>
            <span class="breakpointguide-value"></span>
        </div>`;
    $('body').append(bpgmarkup);
}
