<h2>Follow Clippers to See Deals in Your Deal Stream</h2>
<br>

<?php foreach($posts as $post): ?>

<div id = "article">
	<article>

	    <h2><b><?=$post['first_name']?> <?=$post['last_name']?></b></h2>

	    <h6><b><?=$post['content']?></b></h6>

	    <p><em>
	    	<time datetime="<?=Time::display($post['created'],'Y-m-d G:i')?>">
	        <?=Time::display($post['created'])?>
	    	</time>
	    </em></p>

	</article>
</div>
</br>

<?php endforeach; ?>