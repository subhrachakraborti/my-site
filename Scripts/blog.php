<?php
$rssUrl = 'https://blog.subhrachakraborti.com/feeds/posts/default';
$rss = simplexml_load_file($rssUrl);

if ($rss) {
    echo '<ul>';
    foreach ($rss->channel->item as $item) {
        $title = $item->title;
        $link = $item->link;
        echo "<li><a href='$link' target='_blank'>$title</a></li>";
    }
    echo '</ul>';
} else {
    echo 'Error fetching the RSS feed.';
}
?>